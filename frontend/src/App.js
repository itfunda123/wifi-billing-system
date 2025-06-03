// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './components/Login';
import VerifyCode from './components/VerifyCode';
import Plans from './components/Plans';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify" element={<VerifyCode />} />
        <Route path="/plans" element={<Plans />} />
      </Routes>
    </Router>
  );
}

export default App;
