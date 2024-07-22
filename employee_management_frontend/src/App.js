import './App.css'

import { Route,Routes } from "react-router-dom";
import Auth from "./components/Auth";
import Dashboard from "./components/Dashboard";
import ManageEmployees from "./components/ManageEmployees";
import LeaveManagement from "./components/LeaveManagement";
import PayrollManagement from "./components/PayrollManagement";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    
      <div className="App">
        <Dashboard />
        <div className="main-content">
        <Routes>
          <Route path="/login" element={<Auth />} />
          <Route path="/register" element={<Auth />} />
          <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/employees" element={<ProtectedRoute><ManageEmployees /></ProtectedRoute>} />
          <Route path="/leave" element={<ProtectedRoute><LeaveManagement /></ProtectedRoute>} />
          <Route path="/payroll" element={<ProtectedRoute><PayrollManagement /></ProtectedRoute>} />
        </Routes>
        </div>
         
      </div>
   
  );
}

export default App;
