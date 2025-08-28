# Multilingual Communications — Architecture Spec

Purpose
- Provide fast, consistent translations for customer emails, website snippets, and documents with optional human-review workflows and glossaries to preserve brand voice.

Contract
- Inputs: source text (email, webpage fragment, document), target language(s), optional glossary/style rules.
- Outputs: translated text, quality score, suggested edits, optional human review request.

Core components
1. Ingest & Preprocessor
   - Accepts inputs via API, ingestion UI, or connectors to email/CMS.
   - Normalizes text and extracts locale-specific placeholders.
2. MT Engine Adapter
   - Adapter layer to machine translation services (Azure Translator, Google Translate, DeepL) or LLM-based translation.
3. Glossary & Style Guide Service
   - Stores approved terms and style preferences for each client and language.
4. Human Review Workflow
   - Queue & editor UI where human reviewers can approve or edit translations.
   - Versioned edits stored and used to fine-tune future mapping.
5. QA & Scoring
   - Automatic quality checks (length, placeholder fidelity, profanity filters) and human QA score capture.
6. Delivery & Integrations
   - For website: CMS API (WordPress/Shopify) update endpoints.
   - For email: back to email pipeline or provide files for manual send.

Data model
- translation_jobs(id, source_text, source_lang, target_lang, status, created_at)
- glossaries(client_id, source_term, target_term, approved)
- review_edits(id, job_id, reviewer_id, edited_text, score, notes)

Sequence flow
1. Client posts translation job via UI or API.
2. Preprocessor extracts placeholders, maps to glossary.
3. MT Engine returns initial translation.
4. QA checks run; if quality < threshold or client requires human review, push to review queue.
5. Human reviewer edits/approves; approved translation delivered to destination (CMS/email).
6. Edits stored and optionally fed to a fine-tuning / example store to improve future translations.

Integration & APIs
- MT APIs: Azure Translator, DeepL, Google Cloud Translation, or LLM endpoint.
- CMS: Shopify/WordPress/Netlify CMS REST APIs.
- Email: SMTP or API provider.

Infrastructure
- Stateless API service for job submission and orchestration (Node/Python).
- Worker queue (Redis/RabbitMQ) for processing jobs.
- DB: Postgres for job state and glossaries.
- Storage: blob store for original files.
- Human review UI: React app with simple editor and diff view.

Security & compliance
- Data residency options: allow processing within tenant Azure subscription for sensitive content.
- Access control on glossaries and translations per client.
- Retention policy for source texts and translations.

Quality & scoring
- Use BLEU-like heuristics for quick scoring or human-labeled dataset for client-specific scoring.
- Track reviewer adjustments rate; if high, flag glossary improvements.

Testing & acceptance
- Unit: placeholder preservation, glossary mapping correctness.
- Integration: job round-trip (API → MT → QA → approval → CMS update).
- Acceptance: 95% placeholder fidelity; average reviewer edit length under 10% of output.

Developer tasks
1. Scaffold services and CI/CD pipeline.
2. Build job submission API and DB schema.
3. Integrate one MT provider and implement placeholder handling.
4. Build simple human review UI and queue.
5. Integrate with one CMS/email provider for delivery.
6. Add QA checks and monitoring.

Estimated effort
- MVP (single language pair, no human review): 2–3 weeks.
- Production (multi-language, human review, CMS connectors): 6–8 weeks.

Notes
- Start with 1–2 language pairs and expand after establishing glossary workflows.
- Provide clients with a simple glossary editor to reduce human review workload over time.

