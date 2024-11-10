const Employee = require('../models/employeeModel');

exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch employees' });
  }
};

exports.createEmployee = async (req, res) => {
  try {
    const { name, email, mobile, designation, gender, course } = req.body;
    const image = req.file ? req.file.path : ''; // Check if an image was uploaded

    const newEmployee = new Employee({ name, email, mobile, designation, gender, course, image });
    await newEmployee.save();

    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create employee' });
  }
};

exports.updateEmployee = async (req, res) => {
  try {
    const { name, email, mobile, designation, gender, course } = req.body;
    const image = req.file ? req.file.path : undefined; // Update image if new one is provided

    // Use conditional update to avoid overwriting image field if no new image is provided
    const updateData = { name, email, mobile, designation, gender, course };
    if (image) updateData.image = image;

    const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, updateData, { new: true });

    if (!updatedEmployee) {
      return res.status(404).json({ error: 'Employee not found' });
    }

    res.status(200).json(updatedEmployee);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update employee' });
  }
};

exports.deleteEmployee = async (req, res) => {
  try {
    const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);

    if (!deletedEmployee) {
      return res.status(404).json({ error: 'Employee not found' });
    }

    res.status(200).json({ message: 'Employee deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete employee' });
  }
};
