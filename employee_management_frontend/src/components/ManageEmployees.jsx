import React, { useState, useEffect } from "react";
import {
  fetchEmployees,
  createEmployee,
  fetchDepartments,
  fetchRoles,
} from "../services/api";

const ManageEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    department: "",
    role: "",
    email: "",
  });
  const [departments, setDepartments] = useState([]);
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    const getEmployees = async () => {
      try {
        const { data } = await fetchEmployees();
        console.log("Fetched Employees", data);
        setEmployees(data);
      } catch (error) {
        console.log("Error fetching employees", error);
      }
    };
    getEmployees();
  }, []);

  useEffect(() => {
    const getDepartments = async () => {
      try {
        const { data } = await fetchDepartments();
        console.log("Fetched Departments", data);
        setDepartments(data);
      } catch (error) {
        console.log("Error fetching departments", error);
      }
    };
    getDepartments();
  }, []);

  useEffect(() => {
    const getRoles = async () => {
      try {
        const { data } = await fetchRoles();
        console.log("Fetched Roles", data);
        setRoles(data);
      } catch (error) {
        console.log("Error fetching roles", error);
      }
    };

    getRoles();
  }, []);

  const handleAddEmployee = async (e) => {
    e.preventDefault();
    try {
      const { data } = await createEmployee(newEmployee);
      console.log("Employee Added", data);
      setEmployees([...employees, data]);
      setShowModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
  };

  return (
    <div className="management">
      <h2>Manage Employees</h2>
      <button className="add-btn" onClick={() => setShowModal(true)}>
        Add Employee
      </button>
      <table className="table">
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
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.username}</td>
              <td>{emp.department.department}</td>
              <td>{emp.role.role}</td>
              <td>{emp.email}</td>
              <td className="action_bts">
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <h3>Add New Employee</h3>
            <form onSubmit={handleAddEmployee}>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={newEmployee.name}
                  onChange={handleChange}
                />
              </label>
              <label>
                Department:
                <select
                  name="department"
                  value={newEmployee.department}
                  onChange={handleChange}
                >
                  <option value="">Select Department</option>
                  {departments.map((dept) => (
                    <option key={dept.id} value={dept.id}>
                      {dept.department}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                Role:
                <select
                  name="role"
                  value={newEmployee.role}
                  onChange={handleChange}
                >
                  <option value="">Select Role</option>
                  {roles.map((role) => (
                    <option key={role.id} value={role.id}>
                      {role.role}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={newEmployee.email}
                  onChange={handleChange}
                />
              </label>
              <button type="submit">Add Employee</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageEmployees;
