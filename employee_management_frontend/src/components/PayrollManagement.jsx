import React, { useState } from 'react';
import '../styles/PayrollManagement.css';

const PayrollManagement = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="payroll-management">
      <h2>Payroll Management</h2>
      <button className="add-payroll-btn" onClick={openModal}>Add Payroll</button>

      <table className="payroll-table">
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Month</th>
            <th>Salary</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>July</td>
            <td>$5000</td>
            <td>Paid</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>

      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h3>Add Payroll</h3>
            <form>
              <label>Employee Name</label>
              <input type="text" required />
              <label>Month</label>
              <input type="text" required />
              <label>Salary</label>
              <input type="number" required />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PayrollManagement;
