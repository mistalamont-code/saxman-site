var RECIPIENT_EMAIL = 'saxmangrayson@gmail.com';
var SITE_NAME = 'Saxman';

function doPost(e) {
  try {
    var params = e.parameter || {};

    if (params.website) {
      return jsonResponse({ ok: true });
    }

    var name = clean(params.name);
    var email = clean(params.email);
    var phone = clean(params.phone);
    var eventDate = clean(params['event-date']);
    var eventType = clean(params['event-type']);
    var packageType = clean(params.package);
    var venue = clean(params.venue);
    var message = clean(params.message);

    if (!name || !email || !eventDate || !eventType) {
      return jsonResponse({ ok: false, error: 'Missing required fields' });
    }

    var subject = SITE_NAME + ' booking inquiry: ' + name;
    var body = [
      'New Saxman booking inquiry',
      '',
      'Name: ' + name,
      'Email: ' + email,
      'Phone: ' + orBlank(phone),
      'Event date: ' + eventDate,
      'Event type: ' + eventType,
      'Package: ' + orBlank(packageType),
      'Venue / location: ' + orBlank(venue),
      '',
      'Message:',
      orBlank(message)
    ].join('\n');

    MailApp.sendEmail({
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject: subject,
      body: body,
      name: SITE_NAME + ' Website'
    });

    return jsonResponse({ ok: true });
  } catch (error) {
    return jsonResponse({ ok: false, error: error.message });
  }
}

function clean(value) {
  return String(value || '').replace(/\s+/g, ' ').trim();
}

function orBlank(value) {
  return value || '-';
}

function jsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
