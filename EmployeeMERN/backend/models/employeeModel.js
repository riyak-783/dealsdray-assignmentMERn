const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true }, // It's a good practice to require fields that should always be present
  email: { type: String, required: true, unique: true }, // Ensuring emails are unique
  mobile: { type: String, required: true, unique: true },
  designation: { type: String, required: true }, // Required designation
  gender: { type: String, enum: ["Male", "Female", "Other"], required: true }, // Use enum for gender options
  course: { type: String, required: true }, // Required course
  image: { type: String, default: "" }, // Added image field
  createdAt: { type: Date, default: Date.now },
});

// Exporting the model
module.exports = mongoose.model('Employee', employeeSchema);
