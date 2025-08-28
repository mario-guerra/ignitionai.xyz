FAQ & Support Bot — Starter

Purpose
- Small demo showing a retrieve-and-answer flow over a tiny in-memory document set.

Run locally
1. cd bizplans/quickwins/starter-projects/faq-support-bot
2. npm install
3. npm start

Endpoints
- GET /health
- POST /api/search {query}
- POST /api/answer {query}

Next steps for a junior developer
- Replace in-memory docs with a real ingestion pipeline and vector DB.
- Integrate with an LLM for better answer generation and citation formatting.
- Build a chat widget frontend.

Reference architecture: ../architectures/faq-support-bot-architecture.md
