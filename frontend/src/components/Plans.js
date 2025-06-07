// src/components/Plans.js
import React from 'react';

const Plans = () => {
  const plans = [
    { name: "KUMI", duration: "40 Minutes", price: 10 },
    { name: "MBAO", duration: "2 Hours", price: 20 },
    { name: "8-HOUR", duration: "8 Hours", price: 50 },
    { name: "DAILY", duration: "24 Hours", price: 80 },
    { name: "DAILY DUO", duration: "24 Hours, 2 Devices", price: 140 },
  ];

  const handleBuy = (amount) => {
    // Make backend call to trigger M-Pesa STK Push
    alert(`STK Push for KES ${amount} initiated (Mock)`);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Select a WiFi Plan</h2>
      <div className="row">
        {plans.map((plan, index) => (
          <div className="col-md-4" key={index}>
            <div className="card mb-4 shadow-sm">
              <div className="card-body text-center">
                <h5 className="card-title">{plan.name}</h5>
                <p className="card-text">{plan.duration}</p>
                <p className="card-text fw-bold">KES {plan.price}</p>
                <button className="btn btn-primary" onClick={() => handleBuy(plan.price)}>Buy</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
