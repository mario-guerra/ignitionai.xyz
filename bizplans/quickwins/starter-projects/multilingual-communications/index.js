const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 4003;
app.use(bodyParser.json());

app.get('/health', (req, res) => res.json({status: 'ok', service: 'multilingual-communications'}));

// Simple translation adapter demo (mock)
app.post('/api/translate', (req, res) => {
  const {text, target} = req.body || {};
  if (!text || !target) return res.status(400).json({error: 'text and target required'});
  // Mock: return text with language tag — replace with real MT provider integration
  const translated = `[${target}] ${text}`;
  res.json({translated, quality: 'mock'});
});

// Glossary apply demo
app.post('/api/glossary/apply', (req, res) => {
  const {text, glossary} = req.body || {};
  if (!text) return res.status(400).json({error: 'text required'});
  let out = text;
  if (glossary) {
    Object.keys(glossary).forEach(k => {
      out = out.replace(new RegExp(k, 'g'), glossary[k]);
    });
  }
  res.json({result: out});
});

app.listen(port, () => console.log(`Multilingual starter listening on ${port}`));
