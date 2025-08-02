// src/components/GuestPage.js
import React from 'react';

const GuestPage = () => {
  return (
    <div className="card">
      <h2>Welcome, Guest ✈️</h2>
      <p>Here are some available flights:</p>
      <ul>
        <li>Indigo - Mumbai to Delhi - ₹4,500</li>
        <li>SpiceJet - Chennai to Bangalore - ₹2,100</li>
        <li>Air India - Kolkata to Hyderabad - ₹5,000</li>
      </ul>
    </div>
  );
};

export default GuestPage;
