import axios from "axios";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "../styles/signup.css";

const baseURL = "http://localhost:8000";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
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
      await axios.post(`${baseURL}/addusser`, {
        fullName: formData.username,
        email: formData.email,
        password: formData.password,
      });
      console.log('User added successfully');
      navigate("/Page1");
    } catch (error) {
      console.error('Error:', error);
      // Handle the error and inform the user about the failure.
      setErrorMessage('Failed to sign up.');
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Signup</h2>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />

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

        <button type="submit">Sign Up</button>
      </form>

      {errorMessage && (
        <div className="error-message-container">
          <p className="error-message">{errorMessage}<br/>Please check your inputs and try again.</p>
        </div>
      )}
    </div>
  );
};

export default Signup;

