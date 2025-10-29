# CV en ligne — Sylvain ANGLADE

Application Vue 3 + Vite + TailwindCSS avec thème clair/sombre, export PDF, tests, Docker multi‑stage (dev/recette/prod) et Makefile.

## Prérequis
- Node.js ≥ 20 (recommandé 22)
- npm ≥ 9
- Docker (optionnel) si vous utilisez les images multi‑stage

## Installation
```bash
npm install
```

## Développement
```bash
npm run dev
```
Ouvrir http://localhost:5173

### Thème clair/sombre
Le bouton en haut à droite permet de basculer entre les thèmes. La préférence est mémorisée (localStorage).

### Export PDF
Le bouton "Export PDF" génère un PDF en A4 portrait et tente de conserver les styles (html2pdf.js). Utilisez la route "Aperçu impression" pour vérifier la pagination.

## Tests
```bash
npm test
```
- Vitest + Vue Test Utils + jsdom
- Tests inclus: bascule du thème, rendu de l’app, déclenchement export PDF

## Build
```bash
npm run build
npm run preview  # prévisualisation du build
```

## Makefile (raccourcis)
```bash
make install
make dev
make build
make preview
make test
# Docker
make docker-build-dev
make docker-run-dev
make docker-build-recette
make docker-run-recette
make docker-build-prod
make docker-run-prod
```

## Docker multi‑stage
- dev: Vite en mode développement (hot reload)
- recette: prévisualisation de la version build (vite preview)
- prod: assets statiques servis via sirv

Exemples:
```bash
# Dev
make docker-build-dev
make docker-run-dev   # http://localhost:5173

# Recette
make docker-build-recette
make docker-run-recette  # http://localhost:4173

# Prod
make docker-build-prod
make docker-run-prod  # http://localhost:8080
```

## Contenu du CV
Le contenu provient de `src/cv/data.ts`. Vous pouvez ajuster:
- Profil (nom, titre, coordonnées, résumé)
- Expériences, Formations, Compétences, Certifications

## Personnalisation
- Palette et thèmes: `tailwind.config.js`
- Styles globaux et impression: `src/styles.css`
- Composants UI: `src/components/*`

## Déploiement
L’application est une SPA statique (`dist`). Vous pouvez déployer sur:
- GitHub Pages, Netlify, Vercel, ou un Nginx/Apache

## Notes PDF
Le rendu PDF HTML→PDF dépend du moteur (html2canvas/jspdf). Pour un résultat 100% fidèle, vous pouvez aussi imprimer depuis le navigateur (Ctrl/Cmd+P) en sélectionnant "Enregistrer en PDF".
