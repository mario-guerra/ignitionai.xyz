Invoice & Receipt Automation — Starter

Purpose
- Small demo to parse plain-text invoice content and perform a naive matching against payments.

Run locally
1. cd bizplans/quickwins/starter-projects/invoice-receipt-automation
2. npm install
3. npm start

Endpoints
- GET /health
- POST /api/invoices/parse {filename, text}
- POST /api/match {invoice, payments}

Next steps for a junior developer
- Add file upload and integrate OCR provider (Azure Form Recognizer or Tesseract).
- Build robust parsing and fuzzy matching algorithms.
- Add accounting system connectors (QuickBooks/Xero).

Reference architecture: ../architectures/invoice-receipt-automation-architecture.md
