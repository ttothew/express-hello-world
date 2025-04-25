const { twiml } = require('twilio');
app.post('/twilio/incoming-call', (req, res) => {
  const response = new twiml.VoiceResponse();

  // Start live transcription
  response.start().transcription({
    intelligenceService: process.env.TWILIO_VOICE_INTELLIGENCE_SID,
    statusCallbackUrl: 'https://yourapp.onrender.com/twilio/transcription-events'
  });

  // Forward the call to the user’s cell
  response.dial({
    callerId: '+YourTwilioNumber',
    action: '/twilio/call-ended',
    statusCallback: '/twilio/call-status',
    statusCallbackEvent: 'initiated ringing answered completed'
  }, '+15554443333'); // your cell

  res.type('text/xml').send(response.toString());
});