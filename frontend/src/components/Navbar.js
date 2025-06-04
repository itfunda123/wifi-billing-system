// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <Link className="navbar-brand" to="/">WiFi Billing</Link>
      
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/plans">Plans</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
