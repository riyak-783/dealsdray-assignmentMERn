const express = require('express');
const multer = require('multer');
const { getEmployees, createEmployee, updateEmployee, deleteEmployee } = require('../controllers/employeeController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Configure multer to store uploaded images in the 'uploads/' directory
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Make sure the 'uploads' folder exists
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Use a unique name for each file
  }
});

const upload = multer({ storage });

// Apply the auth middleware to all routes
router.use(authMiddleware);

// Routes
router.get('/', getEmployees);
router.post('/', upload.single('image'), createEmployee); // Add 'upload.single' for image upload
router.put('/:id', upload.single('image'), updateEmployee); // Add 'upload.single' for updating image
router.delete('/:id', deleteEmployee);

module.exports = router;
