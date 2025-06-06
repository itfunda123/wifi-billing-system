import React from "react";
import "../index.css"; 

function Home() {
  return (
    <div className="container text-center my-5 home-font">
      <h1 className="fw-bold text-dark mb-3 animate-fade-in">SmartWiFi Billing System</h1>
      <p className="lead text-secondary fs-4">
        Simple. Secure. Seamless internet billing for your home or business.
      </p>
      <p className="text-muted fs-5">
        Track your usage, pay bills instantly, and stay connected without the hassle.
      </p>
      <a href="/plans" className="btn btn-outline-primary mt-4 px-4 py-2 animate-pop">
        Explore Plans & Billing
      </a>
    </div>
  );
}

export default Home;
