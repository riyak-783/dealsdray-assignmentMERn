import { useState, useEffect } from "react";
import axios from "axios";

function EmployeeForm({ employee, onClose, onSave }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    designation: "",
    gender: "",
    course: "",
    image: "",
  });

  useEffect(() => {
    if (employee) {
      setFormData({
        name: employee.name || "",
        email: employee.email || "",
        mobile: employee.mobile || "",
        designation: employee.designation || "",
        gender: employee.gender || "",
        course: employee.course || "",
        image: employee.image || "",
      });
    }
  }, [employee]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };

      if (employee) {
        // Update the existing employee
        await axios.put(
          `http://localhost:5000/api/employees/${employee._id}`,
          formData,
          { headers }
        );
      } else {
        // Create a new employee
        await axios.post(`http://localhost:5000/api/employees`, formData, {
          headers,
        });
      }
      onSave();
      onClose();
    } catch (error) {
      console.error("Error saving employee:", error.response ? error.response.data : error.message);
      alert("Failed to save employee. Please try again.");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClose = () => {
    setFormData({
      name: "",
      email: "",
      mobile: "",
      designation: "",
      gender: "",
      course: "",
      image: "",
    }); 
    onClose(); 
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md relative">
        <button
          type="button"
          onClick={handleClose} 
          className="absolute top-2 right-2 text-xl text-gray-600 hover:text-gray-900"
        >
          &times;
        </button>

        <h2 className="text-2xl font-mono font-bold mb-4">
          {employee ? "Edit Employee" : "Create Employee"}
        </h2>

        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full p-2 mb-4 border rounded"
          placeholder="Name"
          required
        />
           <input
          type="text"
          value={formData.mobile}
          onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
          className="w-full p-2 mb-4 border rounded"
          placeholder="Mobile no."
          required
        />
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full p-2 mb-4 border rounded"
          placeholder="Email"
          required
        />
        <select
          value={formData.designation}
          onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
          className="w-full p-2 mb-4 border rounded"
          required
        >
          <option value="">Select Designation</option>
          <option value="Manager">Manager</option>
          <option value="Developer">Developer</option>
          <option value="Designer">Designer</option>
        </select>
        <div className="mb-4">
          <label className="mr-4">
            <input
              type="radio"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
            />{" "}
            Male
          </label>
          <label className="mr-4">
            <input
              type="radio"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
            />{" "}
            Female
          </label>
          <label>
            <input
              type="radio"
              value="Other"
              checked={formData.gender === "Other"}
              onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
            />{" "}
            Other
          </label>
        </div>
        <input
          type="text"
          value={formData.course}
          onChange={(e) => setFormData({ ...formData, course: e.target.value })}
          className="w-full p-2 mb-4 border rounded"
          placeholder="Course"
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full p-2 mb-4 border rounded"
        />
        <button
          type="submit"
          className="w-full p-2 text-xl text-white bg-[#00b4d8] hover:bg-[#0096c7] rounded"
        >
          {employee ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
}

export default EmployeeForm;
