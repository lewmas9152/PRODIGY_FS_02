import React, { useState , useEffect} from 'react';
import { fetchEmployees,createEmployee } from '../services/api';

const ManageEmployees = () => {
  const [employees, setEmployees] = useState([]); 
  const [showModal, setShowModal] = useState(false);
  const [newEmployee, setNewEmployee] = useState({name: '', department: '', email: ''});

  useEffect(() => {
    const getEmployees = async () => {
      try {
        const { data } = await fetchEmployees();
        console.log("Fetched Employees",data);
        setEmployees(data);
      } catch (error) {
        console.log("Error fetching employees",error);
      }
    };
    getEmployees();

  }, []);

const handleAddEmployee = async (e) => {
    e.preventDefault();
    try {
      const{ data }=await createEmployee(newEmployee);
      setEmployees([...employees, data]);
      setShowModal(false);
    } catch (error) {
      console.log(error);
    }
  }

const handleChange = (e) => {
    setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
  }

  return (
    <div className='management'>
      <h2>Manage Employees</h2>
      <button className='add-btn' onClick={() => setShowModal(true)}>Add Employee</button>
      <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Role</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.user}</td>
              <td>{emp.department.department}</td>
              <td>{emp.role.role}</td>
              <td>{emp.email}</td>
              <td className='action_bts'>
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
            <form onSubmit={handleAddEmployee}>
              <label>
                Name:
                <input type='text' name='name' value={newEmployee.name} onChange={handleChange} />
              </label>
              <label>
                Department:
                <input type='text' name='department' value={newEmployee.department} onChange={handleChange} />
              </label>
              <label>
                Email:
                <input type='email' name='email' value={newEmployee.email} onChange={handleChange} />
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
