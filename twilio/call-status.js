app.post('/twilio/call-status', (req, res) => {
  const { CallSid, CallStatus } = req.body;
  console.log(`Call ${CallSid} status: ${CallStatus}`);
  res.sendStatus(200);
});