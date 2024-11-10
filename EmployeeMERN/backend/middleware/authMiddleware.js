const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    
    console.log("Token received:", token); // Log the token
    
    // Decode the token to inspect its payload
    const decoded = jwt.decode(token);
    console.log("Decoded token payload:", decoded); // Log decoded token payload
    
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        console.error("Token verification failed:", err);
        return res.status(401).json({ message: 'Unauthorized' });
      }
      req.user = decoded; 
      next(); 
    });
  } else {
    console.error("No token provided in the request.");
    res.status(401).json({ message: 'No token provided' });
  }
};

module.exports = authMiddleware;
