// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSignInAlt, FaBoxOpen } from 'react-icons/fa'; // import icons

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <Link className="navbar-brand" to="/">WiFi Billing System</Link>
      
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">
              <FaHome className="me-1" /> Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/login">
              <FaSignInAlt className="me-1" /> Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/plans">
              <FaBoxOpen className="me-1" /> Plans
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
