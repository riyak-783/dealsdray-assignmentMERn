import { useState } from 'react';

function Navbar({ onAddEmployee, onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleLogout = () => {
    
    localStorage.removeItem('authToken'); 
    window.location.href = '/'; // Redirect to login page
  };

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query); 
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-[#0a9396] text-white p-4 flex font-mono  justify-between items-center shadow-lg">
      <h1 className="text-4xl  font-extrabold">Employee Management</h1>
      <h3 className="text-3xl text-center font-semibold"> Welcome!Admin </h3>
      <div className="flex space-x-4 items-center">
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={handleSearchChange}
          className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-400 text-gray-700"
        />
        <button
          onClick={onAddEmployee}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg shadow-lg transition-colors"
        >
          Add New Employee
        </button>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg shadow-lg transition-colors"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;
