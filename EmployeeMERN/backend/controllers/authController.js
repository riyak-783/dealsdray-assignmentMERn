const jwt = require('jsonwebtoken');
const Admin = require('../models/adminModel');

exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return res.status(200).json({ token });
  }
  res.status(401).json({ message: 'Invalid credentials' });
};
