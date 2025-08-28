Multilingual Communications — Starter

Purpose
- Minimal demo of a translation API and glossary application for quick testing.

Run locally
1. cd bizplans/quickwins/starter-projects/multilingual-communications
2. npm install
3. npm start

Endpoints
- GET /health
- POST /api/translate {text, target}
- POST /api/glossary/apply {text, glossary}

Next steps for a junior developer
- Integrate Azure Translator, DeepL, or LLM-based translation.
- Add human review queue and CMS connectors.

Reference architecture: ../architectures/multilingual-communications-architecture.md
