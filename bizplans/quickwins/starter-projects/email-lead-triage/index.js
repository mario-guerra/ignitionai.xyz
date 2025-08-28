const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 4001;
app.use(bodyParser.json());

// Health
app.get('/health', (req, res) => res.json({status: 'ok', service: 'email-lead-triage'}));

// Simulate inbound email webhook
app.post('/webhook/email', (req, res) => {
  // req.body should contain: {id, from, subject, body}
  const message = req.body || {};
  console.log('Received email webhook:', message);
  // Minimal normalizer example
  const normalized = {
    id: message.id || 'local-' + Date.now(),
    from: message.from || 'unknown',
    subject: message.subject || '',
    body_text: (message.body || '').replace(/<[^>]+>/g, '')
  };
  // Respond with a suggested reply placeholder
  const suggestion = {
    suggested_reply: `Hi ${normalized.from}, thanks for reaching out — we'll follow up shortly.`,
    priority: 'normal'
  };
  res.json({normalized, suggestion});
});

// Endpoint to apply a template merge (simple demo)
app.post('/templates/merge', (req, res) => {
  const {template, fields} = req.body;
  if (!template) return res.status(400).json({error: 'template required'});
  let result = template;
  (fields && Object.keys(fields) || []).forEach(k => {
    result = result.replace(new RegExp(`{{\\s*${k}\\s*}}`, 'g'), fields[k]);
  });
  res.json({result});
});

app.listen(port, () => console.log(`Email Triage starter listening on ${port}`));
