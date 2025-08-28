# Makefile for starter projects

.PHONY: build up down logs help

help:
	@echo "make build   - build all starter images"
	@echo "make up      - docker compose up --build"
	@echo "make down    - docker compose down"
	@echo "make logs    - show docker compose logs"

build:
	docker compose -f bizplans/quickwins/starter-projects/docker-compose.yml build

up:
	docker compose -f bizplans/quickwins/starter-projects/docker-compose.yml up --build -d

down:
	docker compose -f bizplans/quickwins/starter-projects/docker-compose.yml down

logs:
	docker compose -f bizplans/quickwins/starter-projects/docker-compose.yml logs -f
