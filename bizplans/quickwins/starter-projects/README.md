Starter Projects — Quick Run & Debug

This folder contains minimal starter projects for each quick-win. Use the Makefile to build and run all services locally.

Requirements
- Docker and Docker Compose installed locally.
- Node.js (optional for running projects without Docker).

Quick commands
- Build all images:
  make build

- Start all services in background:
  make up

- Stop all services:
  make down

- View logs:
  make logs

Local non-Docker run (example)
- cd bizplans/quickwins/starter-projects/email-lead-triage
- npm install
- npm start

Ports
- email-lead-triage: 4001
- faq-support-bot: 4002
- multilingual-communications: 4003
- invoice-receipt-automation: 4004
- appointment-booking-automation: 4005
- ai-call-agent: 4006

Notes
- Docker base images updated to `node:18-slim`. If you still see vulnerability warnings, run `docker scan` and consider pinning specific image digests or using minimal base images and installing only necessary packages.
- CI workflows were left pointing to the service health endpoints; they will pick up the new Dockerfile changes automatically on push.
