function EmployeeTable({ employees, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto mt-20 p-2 pb-5">
      <table className="min-w-full font-serif bg-white shadow-lg overflow-hidden">
        <thead className="bg-[#2f3e46] text-white">
          <tr>
            <th className="px-4 py-3 text-center">Serial No.</th>
            <th className="px-4 py-3 text-center hidden sm:table-cell">Image</th>
            <th className="px-4 py-3 text-center">Name</th>
            <th className="px-4 py-3 text-center hidden md:table-cell">Email</th>
            <th className="px-4 py-3 text-center hidden lg:table-cell">Mobile no.</th>
            <th className="px-4 py-3 text-center">Designation</th>
            <th className="px-4 py-3 text-center hidden md:table-cell">Gender</th>
            <th className="px-4 py-3 text-center hidden lg:table-cell">Course</th>
            <th className="px-4 py-3 text-center hidden xl:table-cell">Created At</th>
            <th className="px-4 py-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr
              key={employee._id}
              className={`${
                index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
              } hover:bg-gray-200 transition-colors`}
            >
              <td className="px-4 py-3 text-center font-semibold">{index + 1}</td>
              <td className="px-4 py-3 flex justify-center hidden sm:table-cell">
                <img
                  src={employee.image || 'https://placehold.co/400'}
                  alt="Profile"
                  className="w-10 h-10 rounded-full object-cover shadow-md"
                />
              </td>
              <td className="px-4 py-3 text-center">{employee.name}</td>
              <td className="px-4 py-3 text-center hidden md:table-cell">{employee.email}</td>
              <td className="px-4 py-3 text-center hidden lg:table-cell">{employee.mobile}</td>
              <td className="px-4 py-3 text-center">{employee.designation}</td>
              <td className="px-4 py-3 text-center hidden md:table-cell">{employee.gender}</td>
              <td className="px-4 py-3 text-center hidden lg:table-cell">{employee.course}</td>
              <td className="px-4 py-3 text-center hidden xl:table-cell">
                {new Date(employee.createdAt).toLocaleDateString()}
              </td>
              <td className="px-4 py-3 text-center space-x-2">
                <button
                  onClick={() => onEdit(employee)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-3 py-1 rounded-full shadow-md transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(employee._id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold px-3 py-1 rounded-full shadow-md transition-colors"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;
