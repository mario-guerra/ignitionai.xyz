# AI Call Agent — Architecture Spec

Purpose
- Provide a production-ready spec for an AI voice agent that answers calls, qualifies callers, schedules bookings, and handles reminders with safe human fallback.

Contract
- Inputs: inbound call audio stream or recording, caller metadata (caller ID), business rules (services, availability), calendar API.
- Outputs: booking action (calendar event created), voicemail/transcript, SMS/email confirmation, audit logs.

Core components
1. Telephony Connector
   - SIP/Twilio/WebRTC inbound call handling and media hooks.
   - Support for phone number mapping and forwarding rules.
2. ASR (Speech-to-Text)
   - Real-time streaming ASR (Azure Speech SDK, Google Speech-to-Text) to transcribe caller audio.
3. Dialog Manager & NLU
   - Dialog orchestration service using state machine to manage conversation flow (greeting, intent detection, slot filling, disambiguation).
   - NLU model for intent extraction and entity recognition (service type, preferred time).
4. TTS (Text-to-Speech)
   - High-quality TTS for agent responses (Azure/TTS/Google WaveNet).
5. Calendar & Booking Integration
   - Calendar Connector for availability checks and booking creation (Google Calendar / Office365 / booking system).
6. Confirmation & Reminders
   - Send SMS/email confirmations and schedule reminders.
7. Human Handoff & Whisper Mode
   - Handoff bridge to human agent if confidence below threshold; whisper mode where human hears both sides and can intervene.
8. Monitoring, Recording & Compliance
   - Optional recording pipeline, transcript storage, and data retention policies.

Conversation flow (simplified)
1. Incoming call hits Telephony Connector; play greeting.
2. ASR stream -> NLU detects intent (book/cancel/inquiry) and extracts slots.
3. Dialog Manager confirms slots and queries Calendar Connector for availability.
4. If slot available, create tentative booking and inform caller; ask for confirmation.
5. On confirmation, create calendar event and trigger confirmation message via SMS/email.
6. If confidence low at any step, route to human handoff.

Design details
- Dialog manager as a finite-state machine or use a framework like Rasa or Microsoft Bot Framework.
- Keep Conversation Context short (last 2–3 user turns) to reduce ASR/LLM costs.
- Use confidence thresholds for NLU results; if below threshold, ask clarifying question or escalate.

ASR & NLU
- ASR must support real-time streaming with low latency (<300ms preferred for user experience).
- NLU can be a combination of rules + LLM intent classification for flexible phrasing.

Telephony & Media
- Twilio is recommended for quick pilot: handles PSTN, SIP, recording, and media stream to ASR.
- For self-hosted SIP, use an SBC and configure media bridging to ASR.

Integrations
- Calendar APIs: Google Calendar, Microsoft Graph; ensure transactional booking semantics.
- SMS: Twilio SMS or client’s SMS provider.
- CRM: optional contact create/update via API.

Security & compliance
- Recordings: configurable and stored encrypted; retention policy configurable per tenant.
- HIPAA: support BAA and isolated tenant processing; do not send PHI to non-compliant services.
- Consent prompt: agent must inform callers about recording per jurisdiction rules.

Error handling & fallbacks
- If ASR failure: replay prompt or ask to repeat; allow voicemail capture.
- If Calendar write fails: inform caller and create follow-up task for staff.

Monitoring & observability
- Real-time dashboard: calls handled, bookings created, handoffs, ASR latency, errors.
- Call transcript search for QA and agent improvement.

Testing & acceptance
- Unit: intent extractor, slot filling, calendar write logic.
- Integration: end-to-end call simulation via Twilio sandbox: call -> ASR -> booking -> SMS confirmation.
- Acceptance: booking created correctly for 95% of validated test calls; human handoff works and audio latency acceptable.

Developer tasks (recommended order)
1. Setup Twilio sandbox and project skeleton.
2. Implement Telephony Connector to receive calls and route to ASR.
3. Implement ASR integration and basic transcription storage.
4. Build Dialog Manager with sample flow for booking; integrate Calendar Connector.
5. Add TTS for responses and SMS confirmation flow.
6. Implement handoff/whisper mode and admin dashboard for recordings.
7. Add monitoring, logging, and security configs.

Estimated effort
- Pilot (single number, basic booking flow): 4–6 weeks (junior dev + weekly review).
- Production (multi-line, HIPAA-ready, high availability): 3–4 months.

Notes
- Start in a low-risk pilot: forward calls to Twilio number and run agent only during off-hours or overflow.
- Use consent and whisper mode to build operator trust before full automation.
