# Multi-stage Dockerfile for dev / recette / prod
# Base image
FROM node:22-alpine AS base
WORKDIR /app

# Only copy manifests first for better layer caching
COPY package.json ./

# ---------- Dev stage ----------
FROM base AS dev
ENV NODE_ENV=development
# Install all deps (dev + prod)
RUN npm install --no-fund --no-audit
# Copy sources
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

# ---------- Build stage ----------
FROM base AS build
ENV NODE_ENV=production
# Install deps including dev (to run build)
RUN npm install --no-fund --no-audit
# Copy project files
COPY . .
# Build static assets
RUN npm run build

# ---------- Recette stage (preview build) ----------
FROM node:22-alpine AS recette
WORKDIR /app
ENV NODE_ENV=production
# Need vite preview (dev dep), install minimal toolchain
COPY package.json ./
RUN npm install --no-fund --no-audit
COPY --from=build /app/dist ./dist
EXPOSE 4173
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "4173"]

# ---------- Prod stage (static server) ----------
FROM node:22-alpine AS prod
WORKDIR /app
# Install a tiny static server
RUN npm install -g --no-fund --no-audit sirv-cli@3
COPY --from=build /app/dist ./dist
ENV PORT=8080
EXPOSE 8080
CMD ["sirv", "dist", "--single", "--port", "8080", "--host", "0.0.0.0"]
