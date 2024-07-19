import React, { useState } from 'react';
import '../styles/Auth.css';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const switchMode = () => {
    setIsLogin((prevMode) => !prevMode);
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form>
          {!isLogin && (
            <div className="form-control">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" required />
            </div>
          )}
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required />
          </div>
          <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
        </form>
        <button className="switch-btn" onClick={switchMode}>
          {isLogin ? 'Create new account' : 'Login with existing account'}
        </button>
      </div>
    </div>
  );
};

export default Auth;
