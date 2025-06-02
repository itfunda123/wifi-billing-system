// src/components/VerifyCode.js
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const VerifyCode = () => {
  const [code, setCode] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const { phone } = location.state || {};

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/verify-code', { phone, code });
      if (res.data.success) {
        navigate('/plans');
      } else {
        alert('Invalid code.');
      }
    } catch (err) {
      alert('Verification failed.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Enter the Code Sent to {phone}</h2>
      <form onSubmit={handleVerify}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
          />
        </div>
        <button className="btn btn-success">Verify</button>
      </form>
    </div>
  );
};

export default VerifyCode;
