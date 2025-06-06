import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSignInAlt, FaBoxOpen } from 'react-icons/fa';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <Link className="navbar-brand" to="/">WiFi Billing System</Link>

      {/* Toggle button for mobile view */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Collapsible menu */}
      <div className="collapse navbar-collapse" id="navbarNav">
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
