Appointment & Booking Automation — Starter

Purpose
- Minimal booking API showing availability check and booking creation.

Run locally
1. cd bizplans/quickwins/starter-projects/appointment-booking-automation
2. npm install
3. npm start

Endpoints
- GET /health
- POST /api/availability {serviceId, start}
- POST /api/book {serviceId, customer}

Next steps for a junior developer
- Integrate Google Calendar / Microsoft Graph for real availability and transactional writes.
- Add SMS/email confirmation and reminder worker.
- Add reschedule/cancel secure links.

Reference architecture: ../architectures/appointment-booking-automation-architecture.md
