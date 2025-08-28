const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 4002;
app.use(bodyParser.json());

// Health
app.get('/health', (req, res) => res.json({status: 'ok', service: 'faq-support-bot'}));

// Simple in-memory "document store" for demo
const docs = [
  {id: '1', title: 'Refund policy', text: 'We offer refunds within 30 days of purchase.'},
  {id: '2', title: 'Booking', text: 'To book an appointment, visit our booking page.'}
];

// Search endpoint (naive substring search)
app.post('/api/search', (req, res) => {
  const q = (req.body.query || '').toLowerCase();
  const hits = docs.filter(d => d.title.toLowerCase().includes(q) || d.text.toLowerCase().includes(q));
  res.json({query: q, hits});
});

// RAG demo: retrieve top doc and generate a canned answer
app.post('/api/answer', (req, res) => {
  const q = (req.body.query || '').toLowerCase();
  const hit = docs.find(d => d.text.toLowerCase().includes(q) || d.title.toLowerCase().includes(q));
  if (!hit) return res.json({answer: "I don't have enough info — would you like to contact support?", citations: []});
  const answer = `${hit.text} (Source: ${hit.title})`;
  res.json({answer, citations: [{docId: hit.id, title: hit.title}]});
});

app.listen(port, () => console.log(`FAQ Support Bot starter listening on ${port}`));
