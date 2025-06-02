// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/send-code', { phone });
      navigate('/verify', { state: { phone } });
    } catch (err) {
      alert('Failed to send code. Try again.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login with Phone Number</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label>Phone Number (e.g. 07XXXXXXXX)</label>
          <input
            type="text"
            className="form-control"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <button className="btn btn-primary">Send Code</button>
      </form>
    </div>
  );
};

export default Login;
