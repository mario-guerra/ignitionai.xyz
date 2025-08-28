const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 4006;
app.use(bodyParser.json());

app.get('/health', (req, res) => res.json({status: 'ok', service: 'ai-call-agent'}));

// Simulate incoming call webhook with transcript
app.post('/api/call/handle', (req, res) => {
  const {caller, transcript} = req.body || {};
  if (!caller || !transcript) return res.status(400).json({error: 'caller and transcript required'});
  // naive NLU: look for "book" or "appointment"
  const text = transcript.toLowerCase();
  const wantsBooking = text.includes('book') || text.includes('appointment');
  if (wantsBooking) {
    return res.json({action: 'book', suggestedSlots: ['2025-09-01T15:00:00'], confidence: 0.8});
  }
  res.json({action: 'voicemail', confidence: 0.5});
});

app.listen(port, () => console.log(`AI Call Agent starter listening on ${port}`));
