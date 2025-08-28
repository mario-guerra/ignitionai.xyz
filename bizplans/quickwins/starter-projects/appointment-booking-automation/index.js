const express = require('express');
const bodyParser = require('body-parser');
const {v4: uuidv4} = require('uuid');
const app = express();
const port = process.env.PORT || 4005;
app.use(bodyParser.json());

// In-memory services and bookings
const services = [{id: 'svc-1', name: 'Consult', duration: 30}];
const bookings = [];

app.get('/health', (req, res) => res.json({status: 'ok', service: 'appointment-booking-automation'}));

// Check availability (naive)
app.post('/api/availability', (req, res) => {
  const {serviceId, start} = req.body || {};
  // naive always-available check
  res.json({available: true, suggested: start || new Date().toISOString()});
});

// Create booking
app.post('/api/book', (req, res) => {
  const {serviceId, customer} = req.body || {};
  if (!serviceId || !customer) return res.status(400).json({error: 'serviceId and customer required'});
  const id = uuidv4();
  const booking = {id, serviceId, customer, status: 'confirmed'};
  bookings.push(booking);
  res.json({booking});
});

app.listen(port, () => console.log(`Booking starter listening on ${port}`));
