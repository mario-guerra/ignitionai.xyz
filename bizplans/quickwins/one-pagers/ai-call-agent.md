# AI Voicemail Parser — Architecture Spec

## Purpose
- Provide a production-ready spec for an AI system that processes voicemail messages, extracts key information (e.g., intent, caller details, booking requests), performs actions (e.g., scheduling), and sends automated responses (e.g., SMS/email confirmations) with safe human fallback for low-confidence cases.

## Contract
- Inputs: Voicemail audio file (URL from webhook), caller metadata (e.g., caller ID, timestamp), business rules (services, availability), calendar API credentials.
- Outputs: Extracted data (intent, entities), booking action (calendar event created if applicable), automated response (SMS/email), transcript, audit logs, escalation flags.

## Core Components
1. **Telephony Connector**
   - Inbound call handling via Twilio/Plivo/Vonage: Configure unanswered calls to record voicemail and trigger webhook on completion, providing audio URL and metadata.
   - Support for phone number mapping and basic call routing rules (e.g., after-hours only).
2. **ASR (Speech-to-Text)**
   - Batch transcription of voicemail audio files using non-real-time ASR (e.g., Google Cloud Speech-to-Text, Amazon Transcribe, or AssemblyAI) for high accuracy on short clips.
3. **NLU & Extraction Service**
   - LLM-powered intent detection and entity extraction (e.g., via OpenAI GPT-4o or Google Gemini API) to parse transcript for intents (book/cancel/inquiry) and slots (name, preferred time, service type).
4. **Action Orchestrator**
   - Rule-based or lightweight workflow engine to process extractions: Check calendar availability, create bookings, or flag for review.
5. **Response Generator & Sender**
   - LLM to draft personalized responses (e.g., confirmation or acknowledgment); integrate with SMS/email providers (Twilio SMS, SendGrid).
6. **Calendar & Booking Integration**
   - API connector for availability queries and event creation (Google Calendar, Microsoft Graph, or custom booking system).
7. **Human Escalation**
   - Threshold-based flagging: If extraction confidence low, email transcript and summary to staff for manual action.
8. **Monitoring, Storage & Compliance**
   - Secure storage for transcripts and logs; optional audio retention with encryption.

## Processing Flow (Simplified)
1. Incoming call unanswered → Telephony Connector records voicemail → Webhook delivers audio URL and metadata to backend.
2. ASR transcribes audio → Store transcript securely.
3. NLU/Extraction Service analyzes transcript → Extract intent, entities, and confidence score.
4. Action Orchestrator: If intent is actionable (e.g., booking) and confidence high, query Calendar Integration for availability; create event if possible.
5. Response Generator: Draft and send SMS/email (e.g., "Booking confirmed for [time] on [date]. Reply to confirm.").
6. If confidence low or action fails, escalate: Send notification to staff with transcript/details.
7. Log all steps for auditing.

## Design Details
- Use serverless backend (e.g., AWS Lambda, Google Cloud Functions) for webhook handling to minimize infrastructure costs.
- Extraction prompts: Structured LLM prompts like "From this transcript: [transcript]. Extract: intent (book/cancel/inquiry/other), name, phone, service, date/time preference. Output as JSON with confidence score (1-10)."
- Keep processing async and stateless per voicemail to handle bursts efficiently.
- Response templates: Pre-defined with placeholders for personalization to ensure consistency.

## ASR & NLU
- ASR: Select providers with voicemail-optimized models (e.g., AssemblyAI for speaker identification in monologues); aim for <5s processing time per message.
- NLU: LLM for flexibility in handling varied phrasing; fallback to rule-based regex for common patterns (e.g., dates via dateparser library). Tune prompts with few-shot examples from sample voicemails.

## Telephony & Media
- Twilio recommended for pilot: Easy webhook setup, voicemail recording (~$0.004/min), and audio delivery. Configure greeting to inform of recording/consent.
- For self-hosted: Use Asterisk PBX with webhook integration, but Twilio is simpler/low-cost for starters.

## Integrations
- Calendar APIs: Google Calendar API v3 or Microsoft Graph; implement read-only availability checks first, then transactional creates with conflict resolution.
- SMS/Email: Twilio for SMS (~$0.0075/msg), SendGrid/Mailgun for email (free tier up to 100/day).
- CRM (Optional): Update contacts via API (e.g., HubSpot) if name/phone extracted.

## Security & Compliance
- Storage: Encrypt transcripts/audio at rest (e.g., AWS S3 with KMS); configurable retention (e.g., 30 days default).
- HIPAA: If applicable, use compliant providers (e.g., AWS Transcribe Medical) and avoid sending PHI to non-BAA services; include opt-out in responses.
- Consent: Play automated greeting: "This call may be recorded for quality. Leave a message after the tone."
- Access: Role-based auth for dashboard; audit logs for all actions.

## Error Handling & Fallbacks
- ASR failure (e.g., poor audio): Retry once; if fails, escalate to human with raw audio link.
- Extraction ambiguity: If confidence <7/10, auto-escalate and send generic response ("Thanks for your message—we'll follow up soon.").
- Integration errors (e.g., calendar outage): Queue action for retry (up to 3x) or create manual task in CRM.
- General: All errors logged; notify admin via Slack/email for systemic issues.

## Monitoring & Observability
- Real-time dashboard (e.g., via Grafana or Datadog): Metrics include voicemails processed, extraction accuracy, response delivery rate, escalations, processing latency.
- Searchable logs/transcripts for QA; alert on high escalation rates (>20%).
- Cost tracking: Monitor API usage to avoid surprises.

## Testing & Acceptance
- Unit: LLM extraction prompts (mock transcripts), response generation, calendar mocks.
- Integration: End-to-end via Twilio sandbox—upload sample audio → Process → Verify booking/SMS.
- Acceptance: 90%+ accurate extractions on 50+ diverse test voicemails; <10% escalations; responses delivered within 1 minute.

## Developer Tasks (Recommended Order)
1. Set up Twilio account, configure voicemail webhook, and test audio delivery.
2. Implement ASR integration: Download/process audio, store transcript (e.g., in DynamoDB/Postgres).
3. Build NLU/Extraction Service: LLM API calls with JSON output parsing.
4. Develop Action Orchestrator: Integrate calendar checks/creates and basic rules.
5. Add Response Generator & Sender: Template-based drafting and Twilio/SendGrid hooks.
6. Implement escalation logic and email notifications.
7. Set up monitoring dashboard, security configs, and run end-to-end tests.
8. Deploy to serverless (e.g., Lambda) and pilot with live forwarding.

## Estimated Effort
- Pilot (single number, basic extraction/response): 1-2 weeks (solo dev or small team).
- Production (multi-line, HIPAA-ready, scaled monitoring): 4-6 weeks.

## Notes
- Start small: Pilot on a secondary number during off-hours to gather real voicemails for tuning.
- Iterate on prompts: Use initial escalations to refine LLM accuracy without risking live actions.
- Cost Projection: For 100 voicemails/month, ~$2-5 total (Twilio + ASR + LLM); scale linearly.
- Future-Proof: Design for easy upgrade to live calls by adding streaming ASR later.# AI Voicemail Agent — Revised Architecture Spec

**Purpose**  
- Provide a production-ready spec for an AI voicemail agent that processes incoming voicemail messages, extracts relevant information (e.g., intent to book, caller details), performs actions like scheduling or inquiries, and sends automated responses (SMS/email) with human fallback for uncertain cases. This simplifies the original live interaction model by focusing on asynchronous, post-call processing to reduce complexity and costs.

**Contract**  
- Inputs: Voicemail audio file (URL via webhook), caller metadata (caller ID, timestamp), business rules (services, availability), calendar API.  
- Outputs: Extracted intent/entities, booking action (calendar event created if applicable), automated response (SMS/email), transcript, audit logs, escalation flags for human review.

**Core Components**  
1. **Telephony Connector**  
   - Use Twilio, Plivo, or Vonage for inbound call handling: Route unanswered calls to voicemail recording and trigger a webhook on completion, delivering the audio URL and metadata to the backend.  
   - Support for phone number mapping and basic forwarding rules if needed.  
2. **ASR (Speech-to-Text)**  
   - Batch transcription of voicemail audio files using non-real-time ASR services (e.g., Google Cloud Speech-to-Text, Amazon Transcribe, or AssemblyAI) for high accuracy on short clips.  
3. **NLU & Extraction Service**  
   - LLM-based or rule-enhanced extractor for intent classification (e.g., book appointment, inquiry, cancel) and entity recognition (e.g., name, preferred time, service type).  
   - Use APIs like OpenAI GPT-4o or Google Gemini for flexible parsing of transcripts.  
4. **Automated Response Generator**  
   - Generate personalized response text (e.g., confirmation or acknowledgment) using the same LLM, without TTS since it's text-based (SMS/email).  
5. **Calendar & Booking Integration**  
   - Calendar Connector for availability checks and event creation (e.g., Google Calendar API, Microsoft Graph).  
6. **Response & Notification Dispatcher**  
   - Send SMS/email via Twilio SendGrid or similar; schedule reminders if booking confirmed.  
7. **Human Fallback & Escalation**  
   - If extraction confidence is low, email transcript and extracted data to staff for manual review; optional integration with task management tools (e.g., Slack or CRM ticket).  
8. **Monitoring, Storage & Compliance**  
   - Secure storage for transcripts and audio (encrypted); audit logs for all actions. Optional full recording retention with configurable policies.

**Processing Flow (Simplified)**  
1. Incoming call unanswered → Telephony Connector records voicemail → Webhook delivers audio URL and metadata to backend.  
2. ASR transcribes audio → Store transcript securely.  
3. NLU/Extraction Service analyzes transcript: Detect intent, extract slots (e.g., time, service), and compute confidence score.  
4. If intent is actionable (e.g., booking) and confidence high: Query Calendar Connector for availability → Create event if available → Generate and send confirmation response (SMS/email).  
5. If confidence low or non-actionable: Send generic acknowledgment response and escalate to human (e.g., email to staff).  
6. Log all steps, including outcomes, for auditing.

**Design Details**  
- Backend as a serverless function (e.g., AWS Lambda, Google Cloud Functions) triggered by webhook for event-driven processing.  
- NLU prompts: Structured LLM calls with business rules (e.g., "Extract intent and entities from this transcript. Output JSON with fields: intent, name, time, service, confidence (1-10)."). Keep context to single transcript to minimize token costs.  
- Confidence thresholds: e.g., >7/10 for auto-actions; below triggers escalation. Use rule-based fallbacks for common patterns (e.g., regex for phone numbers).  
- Response templating: Pre-defined templates customized by LLM for natural language.

**ASR & NLU**  
- ASR: Focus on batch processing for low latency (~seconds per voicemail) and high accuracy; support noise reduction if audio quality varies. Use providers with diarization for multi-speaker voicemails (rare but possible).  
- NLU: LLM preferred for handling varied phrasing; supplement with lightweight rules (e.g., spaCy for entity extraction) to reduce API calls/costs. No real-time requirements, so iterative refinement (e.g., re-prompt if ambiguous) is feasible.

**Telephony & Media**  
- Twilio recommended for pilot: Easy webhook setup for voicemail completion, audio storage, and low-cost recording (~$0.004/min).  
- For self-hosted: Use SIP with voicemail box, but Twilio simplifies integration. Audio files delivered as secure URLs for direct ASR access.

**Integrations**  
- Calendar APIs: Google Calendar or Microsoft Graph; implement read/write with error retries for transactional integrity (e.g., check availability before create).  
- SMS/Email: Twilio Programmable Messaging or SendGrid; fallback to email if SMS opt-out detected.  
- CRM (Optional): Update contacts or create tasks via API (e.g., HubSpot, Salesforce) on extraction success.

**Security & Compliance**  
- Audio/Transcripts: Encrypted at rest (e.g., AWS S3 with KMS); access logs for auditing.  
- HIPAA: If applicable, use compliant providers (e.g., Twilio HIPAA-eligible, Google Cloud with BAA); avoid sending PHI to non-compliant LLMs or route through secure proxies.  
- Consent: Include in call greeting (e.g., "Your message may be transcribed and responded to automatically"); configurable per jurisdiction.  
- Data Minimization: Delete audio after transcription unless opted for retention.

**Error Handling & Fallbacks**  
- ASR Failure: Retry transcription (up to 2x) or flag for manual upload; send generic voicemail acknowledgment.  
- Extraction Failure: Default to escalation; notify caller via response ("Thanks for your message—we'll review and reply soon.").  
- Integration Errors: Queue actions (e.g., via SQS) for retry; log and alert on persistent issues.  
- Overall: Always send an initial acknowledgment SMS/email within minutes to manage expectations.

**Monitoring & Observability**  
- Real-time dashboard: Voicemails processed, extraction success rate, actions taken (bookings/escalations), API latencies, costs.  
- Tools: Integrate with Datadog, CloudWatch, or simple logging (e.g., ELK stack) for transcript search and QA analysis.  
- Alerts: For high escalation rates or failures.

**Testing & Acceptance**  
- Unit: ASR mock transcription, NLU extraction accuracy on sample transcripts, response generation.  
- Integration: End-to-end simulation via Twilio sandbox: Upload audio → Process → Verify booking/SMS; test escalations.  
- Acceptance: 90%+ accurate extractions on 50+ test voicemails (diverse accents/phrasing); responses delivered correctly; escalations trigger properly. Edge cases: Noisy audio, incomplete messages, urgent requests.

**Developer Tasks (Recommended Order)**  
1. Set up Twilio sandbox for voicemail webhooks and basic audio handling.  
2. Implement ASR integration: Download/process audio files and store transcripts.  
3. Build NLU/Extraction Service with LLM prompts and confidence scoring.  
4. Integrate Calendar Connector and test booking logic.  
5. Add Response Generator and Dispatcher (SMS/email flows).  
6. Implement fallback/escalation (e.g., email notifications) and basic monitoring.  
7. Configure security, compliance, and end-to-end testing.

**Estimated Effort**  
- Pilot (single number, basic booking extraction/response): 1–2 weeks (solo dev or small team).  
- Production (multi-line, HIPAA-ready, high availability): 1–2 months, including tuning and scaling.

**Notes**  
- Start with a low-risk pilot: Route voicemails from a test number and monitor escalations to build accuracy.  
- Cost Optimization: Use free tiers initially; monitor LLM/token usage and switch to cheaper providers if volume grows.  
- Iteration: Collect escalated transcripts to fine-tune prompts/models over time. No live interaction means easier debugging and lower stakes.  
- Scalability: Serverless design handles bursts; add queuing for high volumes.  
