const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 4004;
app.use(bodyParser.json());

app.get('/health', (req, res) => res.json({status: 'ok', service: 'invoice-receipt-automation'}));

// Upload invoice metadata (in a real app you'd accept file uploads)
app.post('/api/invoices/parse', (req, res) => {
  const {filename, text} = req.body || {};
  if (!text) return res.status(400).json({error: 'text required'});
  // Mock parsing: look for invoice number and amount
  const invoiceNumberMatch = text.match(/Invoice[:#\s]*(\w+)/i);
  const amountMatch = text.match(/\$([0-9,.]+)/);
  res.json({
    invoice_number: invoiceNumberMatch ? invoiceNumberMatch[1] : null,
    amount: amountMatch ? amountMatch[1] : null,
    confidence: 'mock'
  });
});

app.post('/api/match', (req, res) => {
  const {invoice, payments} = req.body || {};
  // naive matching by amount
  if (!invoice || !payments) return res.status(400).json({error: 'invoice and payments required'});
  const match = payments.find(p => p.amount === invoice.amount) || null;
  res.json({match});
});

app.listen(port, () => console.log(`Invoice starter listening on ${port}`));
