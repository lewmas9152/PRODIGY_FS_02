import React, { useState } from 'react';
import '../styles/LeaveManagement.css';

const LeaveManagement = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="leave-management">
      <h2>Leave Management</h2>
      <button className="add-leave-btn" onClick={openModal}>Request Leave</button>

      <table className="leave-table">
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Leave Type</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>Annual Leave</td>
            <td>2024-07-01</td>
            <td>2024-07-15</td>
            <td>Approved</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>

      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h3>Request Leave</h3>
            <form>
              <label>Employee Name</label>
              <input type="text" required />
              <label>Leave Type</label>
              <input type="text" required />
              <label>Start Date</label>
              <input type="date" required />
              <label>End Date</label>
              <input type="date" required />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeaveManagement;
