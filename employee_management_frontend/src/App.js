import "./App.css";
import { Route,Routes } from "react-router-dom";
import Auth from "./components/Auth";
import Dashboard from "./components/Dashboard";
import ManageEmployees from "./components/ManageEmployees";
import LeaveManagement from "./components/LeaveManagement";
import PayrollManagement from "./components/PayrollManagement";

function App() {
  return (
    
      <div className="App">
        <Dashboard />
        <div className="main-content">
        <Routes>
          <Route path="/employees" element={<ManageEmployees />}  />
          <Route path="/leave" element={<LeaveManagement />}  />
          <Route path="/payroll" element={<PayrollManagement />}  />


        </Routes>   
        </div>
         
      </div>
   
  );
}

export default App;
