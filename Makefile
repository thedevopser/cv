# Simple Makefile to manage local and Docker workflows

PROJECT_NAME=cv-sylvain-anglade
IMAGE_BASE=$(PROJECT_NAME)
PORT_DEV=5173
PORT_RECETTE=4173
PORT_PROD=8080

# ----- Local -----
.PHONY: install dev build preview test lint format clean

install:
	npm install

dev:
	npm run dev

build:
	npm run build

preview:
	npm run preview

e2e:
	@echo "No e2e configured; using unit tests only"

test:
	npm test

lint:
	npm run lint || true

format:
	npm run format

clean:
	rm -rf node_modules dist

# ----- Docker -----
.PHONY: docker-build-dev docker-run-dev docker-build-recette docker-run-recette docker-build-prod docker-run-prod docker-stop

docker-build-dev:
	docker build -t $(IMAGE_BASE):dev --target dev .

docker-run-dev:
	docker run --rm -it -p $(PORT_DEV):5173 -v $(PWD):/app -v /app/node_modules $(IMAGE_BASE):dev

docker-build-recette:
	docker build -t $(IMAGE_BASE):recette --target recette .

docker-run-recette:
	docker run --rm -it -p $(PORT_RECETTE):4173 $(IMAGE_BASE):recette

docker-build-prod:
	docker build -t $(IMAGE_BASE):prod --target prod .

docker-run-prod:
	docker run --rm -it -p $(PORT_PROD):8080 $(IMAGE_BASE):prod

docker-stop:
	@docker ps -q --filter ancestor=$(IMAGE_BASE):dev | xargs -r docker stop
	@docker ps -q --filter ancestor=$(IMAGE_BASE):recette | xargs -r docker stop
	@docker ps -q --filter ancestor=$(IMAGE_BASE):prod | xargs -r docker stop
