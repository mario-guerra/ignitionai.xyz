AI Call Agent — Starter

Purpose
- Minimal HTTP-based starter to simulate call handling and NLU decisions (for pilot/workshop use).

Run locally
1. cd bizplans/quickwins/starter-projects/ai-call-agent
2. npm install
3. npm start

Endpoints
- GET /health
- POST /api/call/handle {caller, transcript}

Next steps for a junior developer
- Integrate Twilio Voice/WebRTC for real inbound calls and media streaming.
- Add ASR (Azure Speech) and TTS for responses.
- Implement Dialog Manager, calendar connector, and human handoff.

Reference architecture: ../architectures/ai-call-agent-architecture.md
