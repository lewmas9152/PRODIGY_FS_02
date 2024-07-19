import React, { useState } from 'react';
import '../styles/ManageEmployees.css';

const ManageEmployees = () => {
  const [employees, setEmployees] = useState([
    // Example data
    { id: 1, name: 'John Doe', department: 'Engineering', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', department: 'Marketing', email: 'jane@example.com' },
  ]);
  
  const [showModal, setShowModal] = useState(false);

  const handleAddEmployee = () => {
    // Handle the logic for adding a new employee
    setShowModal(true);
  };

  return (
    <div className='manage-employees'>
      <h2>Manage Employees</h2>
      <button className='add-employee-btn' onClick={handleAddEmployee}>Add Employee</button>
      <table className='employee-table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.department}</td>
              <td>{emp.email}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div className='modal'>
          <div className='modal-content'>
            <span className='close' onClick={() => setShowModal(false)}>&times;</span>
            <h3>Add New Employee</h3>
            {/* Form for adding employee */}
            <form>
              <label>
                Name:
                <input type='text' name='name' />
              </label>
              <label>
                Department:
                <input type='text' name='department' />
              </label>
              <label>
                Email:
                <input type='email' name='email' />
              </label>
              <button type='submit'>Add Employee</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageEmployees;
