// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <Link className="navbar-brand" to="/">WiFi Billing</Link>
      <div>
        <Link className="nav-link d-inline text-white" to="/">Home</Link>
        <Link className="nav-link d-inline text-white" to="/login">Login</Link>
        <Link className="nav-link d-inline text-white" to="/plans">Plans</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
