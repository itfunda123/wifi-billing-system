import React from "react";

function Home() {
  return (
    <div className="container text-center my-5">
      <h1 className="fw-bold text-dark mb-3">SmartWiFi Billing System</h1>
      <p className="lead text-secondary">
        Simple. Secure. Seamless internet billing for your home or business.
      </p>
      <p className="text-muted">
        Track your usage, pay bills instantly, and stay connected without the hassle.
      </p>
      <a href="/plans" className="btn btn-outline-primary mt-4 px-4 py-2">
        Explore Plans & Billing
      </a>
    </div>
  );
}

export default Home;
