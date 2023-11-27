import React, { useState } from 'react';
import axios from 'axios';
import "../styles/login.css";
import { useNavigate } from "react-router-dom";

const baseURL = "http://localhost:8000";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${baseURL}/login`, formData);
      console.log('Login successful');
      navigate("/Page1");
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Log In</button>
      </form>

      {errorMessage && (
        <div className="error-message-container">
          <p className="error-message">{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export default Login;