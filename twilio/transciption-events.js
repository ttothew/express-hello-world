app.post('/twilio/transcription-events', (req, res) => {
  const event = req.body.event;

  if (event === 'transcription-content') {
    const { transcription, callSid } = req.body;
    const { text, isPartial } = transcription;

    console.log(`Live transcript [${isPartial ? 'partial' : 'final'}]: ${text}`);

    // Optionally emit to frontend via WebSocket
  }

  res.sendStatus(200);
});