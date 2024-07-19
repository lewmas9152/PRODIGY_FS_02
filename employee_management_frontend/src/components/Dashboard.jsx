import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Dashboard.css'


const Dashboard = () => {
  return (
    <div className='dashboard'>
      <h1>Employee management system</h1>

      <ul>
        <li><Link to="/employees">Manage Employees</Link></li>
        <li><Link to="/attendance">Attendance</Link></li>
        <li><Link to="/leave">Leave Management</Link></li>
        <li><Link to="/payroll">Payroll</Link></li>
        <li><Link to="/performance">Performance</Link></li>
        <li><Link to="/recruitment">Recruitment</Link></li>
        <li><Link to="/onboarding">Onboarding</Link></li>
        <li><Link to="/training">Training</Link></li>
        <li><Link to="/reports">Reports</Link></li>
        <li><Link to="/compliance">Compliance</Link></li>
        <li><Link to="/messaging">Messaging</Link></li>
        <li><Link to="/announcements">Announcements</Link></li>
        <li><Link to="/self-service">Self-Service</Link></li>
        <li><Link to="/manager-service">Manager Service</Link></li>
      </ul>
    </div>
  )
}

export default Dashboard