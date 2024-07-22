import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = JSON.parse(localStorage.getItem("profile"));

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
