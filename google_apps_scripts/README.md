# Contact Form Handler - Google Apps Script

This Google Apps Script handles form submissions from the IgnitionAI contact page, validates the data, applies spam protection, and sends email notifications via Gmail.

## Setup Instructions

### 1. Create Google Apps Script Project
1. Go to [script.google.com](https://script.google.com)
2. Sign in with your Google Workspace account (ignitionai.xyz domain)
3. Click "New Project"
4. Name it "Contact Form Handler"
5. Copy the contents of `Code.gs` into the script editor

### 2. Configure Email Recipient
In `Code.gs`, update the `recipient` variable on line 20:
```javascript
const recipient = 'your-email@ignitionai.xyz'; // Replace with your desired email
```

### 3. Deploy as Web App
1. Click "Deploy" > "New deployment"
2. Select type "Web app"
3. Set "Execute as" to "Me" (your account)
4. Set "Who has access" to "Anyone"
5. Click "Deploy"
6. Copy the deployment URL (it will look like: `https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec`)

### 4. Authorize the Script
On first deployment, Google will prompt you to authorize the script to send emails. Grant the necessary permissions.

## Usage

The script accepts POST requests with JSON data containing:
- `name`: Contact's full name
- `email`: Contact's email address
- `subject`: Email subject
- `message`: Contact message
- `human`: Boolean indicating human verification
- `js_input`: Should be "js_present"
- `submissionTime`: Timestamp when form was loaded

## Response Format

Returns JSON:
- Success: `{"success": true}`
- Error: `{"error": "Error message"}`

## Spam Protection

The script implements the same spam checks as the frontend:
- Minimum 5-second submission time
- Human verification checkbox
- Honeypot field validation
- JavaScript presence check

## Testing

You can test the deployment by sending a POST request using curl:

```bash
curl -X POST https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test Subject",
    "message": "Test message",
    "human": true,
    "js_input": "js_present",
    "submissionTime": 1694900000000
  }'
```

## Troubleshooting

- Check execution logs in the Apps Script editor under "Executions"
- Verify email permissions were granted during deployment
- Ensure the recipient email is a valid Google Workspace address
- Check Gmail spam folder for test emails

## Security Notes

- The script validates all input data
- Spam protection mirrors frontend implementation
- Only authorized emails can be sent (your Google Workspace account)
- Consider rate limiting if high traffic is expected