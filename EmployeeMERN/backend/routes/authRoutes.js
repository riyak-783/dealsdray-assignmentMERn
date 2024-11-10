const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Log incoming request data
  console.log('Received login request:', { email, password });

  // Log the expected credentials from environment variables
  console.log('Expected email and password:', {
    expectedEmail: process.env.ADMIN_EMAIL,
    expectedPassword: process.env.ADMIN_PASSWORD // Only log this for debugging, remove or comment out in production
  });

  // Check against admin credentials in .env
  if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return res.json({ token });
  }

  console.log('Invalid credentials');
  return res.status(401).json({ message: 'Invalid credentials' });
});

module.exports = router;
