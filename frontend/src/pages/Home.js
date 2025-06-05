import React from "react";

function Home() {
  return (
    <div className="container mt-5 text-center">
      <div className="p-5 mb-4 bg-light rounded-3 shadow">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold text-primary">Welcome to SmartWiFi Billing System</h1>
          <p className="fs-4">
            Effortlessly manage your internet usage, track your bills, and make payments in seconds.
          </p>
          <p className="fs-5 text-muted">
            Stay connected. Stay in control.
          </p>
          <a href="/plans" className="btn btn-primary btn-lg mt-3">
            View Plans & Billing
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
