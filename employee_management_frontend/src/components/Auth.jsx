import React, { useState } from "react";
import "../styles/Auth.css";
import { register, login } from "../services/api";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const switchMode = () => {
    setIsLogin((prevMode) => !prevMode);
    setFormData({ username: "", email: "", password: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        const { data } = await login(formData);
        localStorage.setItem("profile", JSON.stringify(data));
        navigate("/employees");
      } else {
        await register(formData);
        switchMode();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          {!isLogin && (
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          )}
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
        </form>
        <button className="switch-btn" onClick={switchMode}>
          {isLogin ? "Create new account" : "Login with existing account"}
        </button>
      </div>
    </div>
  );
};

export default Auth;
