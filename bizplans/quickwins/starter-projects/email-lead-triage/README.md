Email & Lead Triage — Starter

Purpose
- Minimal Node.js/Express starter showing how to receive an email webhook, normalize the message, and return a suggested reply.

Run locally
1. cd bizplans/quickwins/starter-projects/email-lead-triage
2. npm install
3. npm start

Endpoints
- GET /health — service health
- POST /webhook/email — simulate inbound email webhook; accepts JSON {id, from, subject, body}
- POST /templates/merge — merge a template with fields {template, fields}

Next steps for a junior developer
- Add Gmail/Microsoft Graph webhook integration.
- Hook up an LLM adapter to generate suggestions.
- Persist messages to PostgreSQL and add a simple review UI.

Reference architecture: ../architectures/email-lead-triage-architecture.md
