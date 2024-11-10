import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import EmployeeTable from '../components/EmployeeTable';
import EmployeeForm from '../components/EmployeeForm';

function EmployeeListPage() {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const fetchEmployees = async () => {
    const apiUrl = 'http://localhost:5000/api/employees'; // Change to your actual backend URL
    const token = localStorage.getItem('token'); // Retrieve the token
    console.log("Token used for API:", token); // Log the token being used

    if (!token) {
      alert('No token found. Please log in.');
      return; // Early exit if no token
    }

    try {
      const res = await axios.get(apiUrl, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setEmployees(res.data);
    } catch (error) {
      if (error.response) {
        console.error("Error fetching employees:", error.response.data); // Log error response from server
        if (error.response.status === 401) {
          alert('Unauthorized access. Please log in again.'); // Alert for unauthorized access
          localStorage.removeItem('token'); // Clear token if unauthorized
          // Optionally, redirect to login page here
        }
      } else {
        console.error("Error fetching employees:", error.message);
        alert('Failed to fetch employees. Please try again later.');
      }
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleEdit = (employee) => {
    setSelectedEmployee(employee);
    setIsFormOpen(true);
  };

  const handleDelete = async (id) => {
    const deleteUrl = `http://localhost:5000/api/employees/${id}`; // Change to your actual backend URL
    const token = localStorage.getItem('token'); // Retrieve the token for delete request
    try {
      await axios.delete(deleteUrl, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchEmployees(); // Refresh the employee list after deletion
    } catch (error) {
      if (error.response) {
        console.error("Error deleting employee:", error.response.data); // Log error response from server
        alert('Failed to delete employee. Please try again later.');
      } else {
        console.error("Error deleting employee:", error.message);
        alert('Failed to delete employee. Please try again later.');
      }
    }
  };

  return (
    <div>
      <Navbar onAddEmployee={() => setIsFormOpen(true)} />
      <EmployeeTable employees={employees} onEdit={handleEdit} onDelete={handleDelete} />
      {isFormOpen && <EmployeeForm employee={selectedEmployee} onClose={() => setIsFormOpen(false)} onSave={fetchEmployees} />}
    </div>
  );
}

export default EmployeeListPage;
