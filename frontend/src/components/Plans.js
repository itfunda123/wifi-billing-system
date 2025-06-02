// src/components/Plans.js
import React from 'react';

const Plans = () => {
  const handleBuy = (amount) => {
    // Make backend call to trigger M-Pesa STK Push
    alert(`STK Push for KES ${amount} initiated (Mock)`);
  };

  return (
    <div className="container mt-5">
      <h2>Select a WiFi Plan</h2>
      <div className="row">
        {[50, 100, 200].map((amount, index) => (
          <div className="col-md-4" key={index}>
            <div className="card mb-4 shadow">
              <div className="card-body text-center">
                <h5 className="card-title">Plan {index + 1}</h5>
                <p className="card-text">KES {amount}</p>
                <button className="btn btn-primary" onClick={() => handleBuy(amount)}>Buy</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
