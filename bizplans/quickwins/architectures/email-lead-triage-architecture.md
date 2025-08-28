# Email & Lead Triage — Architecture Spec

Purpose
- Implement a safe, auditable Email & Lead Triage system that suggests replies, prioritizes leads, and routes messages to the right person.
- Target audience: junior developer should be able to implement with this spec and basic supervision.

Contract (short)
- Inputs: Incoming email (raw MIME), optional CRM contact lookup, user-configured priority rules and templates.
- Outputs: Suggested reply text, priority label, route action (assign to user/team, create CRM lead, schedule follow-up), audit log entry.
- Error modes: parsing failure, external API (provider/CRM) unavailable, rate limiting.

High-level components
1. Ingest Layer
   - Email connector service (Gmail OAuth / IMAP / Outlook OAuth) that pulls new messages or receives webhooks.
   - Normalizer that converts raw email into canonical JSON: {id, from, to, subject, body_text, body_html, attachments_meta, received_at}.
2. Classification & Triage
   - Rule Engine: evaluates owner-defined rules (keyword, sender, time-of-day, VIP list).
   - ML/AI Processor: sends sanitized prompt to LLM/AI service for classification, suggested reply, and intent extraction.
   - Template Service: holds reply templates and merges fields.
3. Action Router
   - CRM Connector: create/update lead/contact in HubSpot/Zoho/Custom via API.
   - Assignment Service: assign messages/tasks to users or queues.
   - Scheduler: create follow-up tasks or calendar events (optionally integrate to Calendly/Google Calendar).
4. Review UI / Approval Queue
   - Web UI (React/Next) where staff review suggested replies and accept/edit/send.
5. Audit & Persistence
   - Database (Postgres) storing message records, suggestions, actions, user approvals and metrics.
6. Integrations
   - Optional CRM, calendar, Slack/Teams for notifications, and email-sending provider (SMTP or API).
7. Admin / Rules UI
   - Simple UI to add priority keywords, VIP list, and template text.

Data model (core tables)
- messages(id, external_id, from, to, subject, body_text, received_at, raw_json, status)
- suggestions(id, message_id, suggested_text, score, model_version, created_at, approved_by, approved_at)
- actions(id, message_id, action_type, payload_json, executed, executed_at)
- rules(id, owner_id, match_type, expression, priority, created_at)
- templates(id, name, body, placeholders, created_by)

Sequence flow
1. Email connector receives webhook or polls: saves message to messages.
2. Normalizer extracts text; attachments stored to blob storage if present.
3. Rule Engine runs; if rule matches (e.g., VIP), set high priority.
4. ML Processor (LLM) receives sanitized prompt including last N messages and returns: intent, suggested reply, confidence score, suggested routing.
5. Suggestion saved; Notification sent to Review UI / Slack.
6. Staff reviews in UI and either approves to send (via email API) or edits and sends.
7. On send, create/update CRM entry via CRM Connector and log action.

Prompts & safety
- Always redact PII/sensitive numbers before sending to external models unless tenant opts for private hosting.
- Provide template: "Given the customer message: <message>, produce a polite reply in the client's tone, include <fields>. If uncertain, respond with a clarifying question." Limit token context.

Integrations & APIs
- Gmail API / Microsoft Graph for message ingestion.
- SendGrid / SMTP / Mailgun for sending messages (or Gmail API send).
- CRM (HubSpot/Zoho/Custom REST) for lead creation.
- Optional: Google Calendar API for follow-ups.

Infrastructure & hosting
- Backend: Node.js/Express or Python/FastAPI microservices.
- DB: PostgreSQL.
- Storage: S3-compatible for attachments (Azure Blob / AWS S3 / GCP).
- Queue: Redis or RabbitMQ for processing pipeline.
- AI: OpenAI/Azure OpenAI or self-hosted LLM via running inference API.
- Hosting: containerized (Docker) on Azure App Service / Container Apps / AWS ECS / Kubernetes.

Security & compliance
- OAuth for mail integrations; store tokens encrypted (KMS/Vault).
- Encrypt PII at rest (DB column-level if necessary).
- Option to run AI calls through tenant-owned Azure subscription to avoid sending raw data to third-party.
- RBAC for Review UI; audit trails for approvers.

Error handling & retries
- Use retry with backoff for transient external failures.
- Dead-letter queue for messages that fail N times.
- Alerting on high error rates.

Monitoring & observability
- App metrics: messages processed, suggestions generated, approvals, send errors.
- Tracing: instrument key flow (ingest → ML → suggestion → send).
- Logs: structured logs (JSON) shipped to ELK or equivalent.

Testing & acceptance criteria
- Unit tests for normalizer, rules engine, template merge.
- Integration tests: simulate incoming email → suggestion created → staff approve → message sent and CRM updated (mock external APIs).
- Acceptance: 95% of normalized messages have text body extracted correctly; template merge works for placeholders; suggestion appears in UI within 5s of ingestion on average.

Developer tasks (recommended order)
1. Scaffold project, CI, lint, and containerization.
2. Implement Email connector (polling mode first with Gmail IMAP or Gmail API sandbox).
3. Implement Normalizer and store messages in DB.
4. Basic Rule Engine (keyword-based) and Templates DB.
5. Integrate with LLM using a thin adapter and implement suggestion save flow.
6. Build minimal Review UI to view messages and accept/send.
7. Connect Send API and mock CRM integration.
8. Add retries, logging, and monitoring.

Estimated effort (junior dev + 1 senior review)
- MVP (pilot): 3–4 weeks.
- Production-ready with CRM integrations and security hardening: 6–8 weeks.

Notes
- Start with a pilot using polling + manual send to reduce risk. Use explicit opt-in to enable automated sends.
- Keep privacy-first defaults and make advanced features opt-in.
