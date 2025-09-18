function doPost(e) {
  try {
    // Support both JSON POST (fetch/curl) and form-encoded POST (hidden iframe)
    let data = {};
    if (e.postData && e.postData.type && e.postData.type.indexOf('application/json') !== -1) {
      data = JSON.parse(e.postData.contents || '{}');
    } else {
      // e.parameter works for form-encoded data
      data = {
        name: e.parameter && e.parameter.name,
        email: e.parameter && e.parameter.email,
        subject: e.parameter && e.parameter.subject,
        message: e.parameter && e.parameter.message,
        human: e.parameter && (e.parameter.human === 'true' || e.parameter.human === 'on' || e.parameter.human === 'checked'),
        js_input: e.parameter && e.parameter.js_input,
        submissionTime: e.parameter && (parseInt(e.parameter.submissionTime, 10) || 0),
      };
    }

    const { name, email, subject, message, human, js_input, submissionTime } = data;

    // (Debugging) we will return detailed error info in the HTTP/iframe response when failures occur.

    // Basic validation
    if (!name || !email || !subject || !message || !human || js_input !== 'js_present') {
      return ContentService
        .createTextOutput(JSON.stringify({ error: 'Invalid submission' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // Spam checks (mirroring frontend)
    const timeElapsed = Date.now() - submissionTime;
    if (timeElapsed < 5000 || !human) {
      return ContentService
        .createTextOutput(JSON.stringify({ error: 'Spam detected' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

  // Send email
  const recipient = 'mario.guerra@ignitionai.xyz';
    const subjectLine = `New ignitionai.xyz Contact Form Submission: ${subject || '(no subject)'}`;
    const body = [
      'New Contact Form Submission',
      '',
      `Name: ${name || ''}`,
      `Email: ${email || ''}`,
      `Subject: ${subject || ''}`,
      `Message: ${message || ''}`,
      '',
      `Submitted: ${new Date().toISOString()}`,
    ].join('\n');

    Logger.log('Preparing to send email to %s. Payload: %s', recipient, JSON.stringify({ name, email, subject }));

    // Determine whether this request was JSON (fetch/curl) or form-encoded (iframe/form)
    const isJsonRequest = e.postData && e.postData.type && e.postData.type.indexOf('application/json') !== -1;

    try {
      MailApp.sendEmail(recipient, subjectLine, body, { replyTo: email || undefined, name: 'IgnitionAI Contact Form' });
      Logger.log('Email sent. Remaining quota: %s', MailApp.getRemainingDailyQuota && MailApp.getRemainingDailyQuota());
      // Mail sent successfully; continue
    } catch (mailErr) {
      Logger.log('MailApp.sendEmail error: %s', mailErr.toString());
      Logger.log('MailApp.sendEmail error: %s', mailErr.toString());
      // Return detailed error info to the caller for in-browser debugging. Note: this reveals
      // internal error strings to the client — remove or sanitize this in production.
      const details = String(mailErr);
      const params = e && e.parameter ? e.parameter : null;
      if (isJsonRequest) {
        return ContentService
          .createTextOutput(JSON.stringify({ error: 'Failed to send email', details: details, params: params }))
          .setMimeType(ContentService.MimeType.JSON);
      } else {
        const errorPayload = { success: false, error: 'Failed to send email', details: details, params: params };
        const html = `<!doctype html><html><head><meta charset="utf-8"></head><body><script>
          try{ window.parent.postMessage(${JSON.stringify(errorPayload)}, '*'); }catch(e){}
          document.write('Submission failed.');
        </script></body></html>`;
        return HtmlService.createHtmlOutput(html).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
      }
    }

    if (isJsonRequest) {
      return ContentService
        .createTextOutput(JSON.stringify({ success: true }))
        .setMimeType(ContentService.MimeType.JSON);
    } else {
      // For iframe/form submissions return a tiny HTML page that posts a message to the parent window
      const payload = { success: true, message: 'Email sent' };
      const html = `<!doctype html><html><head><meta charset="utf-8"></head><body><script>
        try{ window.parent.postMessage(${JSON.stringify(payload)}, '*'); }catch(e){}
        document.write('Thanks — message sent.');
      </script></body></html>`;
      return HtmlService.createHtmlOutput(html).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    }
  } catch (error) {
    Logger.log('Error: ' + error.toString());
    return ContentService
      .createTextOutput(JSON.stringify({ error: 'Internal server error' }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

  /**
   * testSend
   * Manual helper to test MailApp.sendEmail from the Apps Script environment.
   * Run this from the Apps Script editor (select the function and click Run) or
   * call it from an admin-only endpoint if you wire one up.
   * It returns an object with details about the attempt and logs the outcome.
   */
  function testSend() {
    const recipient = 'contact@ignitionai.xyz'; // <-- adjust if you want a different test recipient
    const subjectLine = 'Test email from IgnitionAI Apps Script';
    const body = [
      'This is a test message sent by testSend() from the Apps Script project.',
      '',
      `Timestamp: ${new Date().toISOString()}`,
      '',
      'If you receive this message, MailApp.sendEmail is working for this account.'
    ].join('\n');

    try {
      Logger.log('testSend: attempting to send to %s', recipient);
      MailApp.sendEmail(recipient, subjectLine, body, { name: 'IgnitionAI Test' });
      const remaining = (typeof MailApp.getRemainingDailyQuota === 'function') ? MailApp.getRemainingDailyQuota() : 'unknown';
      Logger.log('testSend: email sent successfully. Remaining quota: %s', remaining);
      return { success: true, recipient: recipient, remainingQuota: remaining };
    } catch (err) {
      Logger.log('testSend: MailApp.sendEmail failed: %s', err.toString());
      return { success: false, error: err.toString() };
    }
  }

    // No persistent sheet logging (developer opted out). Errors/details are returned to callers for debugging.