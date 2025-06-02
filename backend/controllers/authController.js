// backend/controllers/authController.js
let otpStore = {}; // in-memory store

exports.sendCode = (req, res) => {
  const { phone } = req.body;
  const code = Math.floor(100000 + Math.random() * 900000).toString();
  otpStore[phone] = code;

  // In production, send via SMS (e.g., Africa's Talking, Twilio, etc.)
  console.log(`OTP for ${phone}: ${code}`);
  res.json({ success: true, message: 'OTP sent successfully' });
};

exports.verifyCode = (req, res) => {
  const { phone, code } = req.body;
  if (otpStore[phone] && otpStore[phone] === code) {
    delete otpStore[phone]; // Remove used code
    res.json({ success: true });
  } else {
    res.json({ success: false, message: 'Invalid code' });
  }
};
