// src/components/CurrencyConvertor.js
import React, { useState } from 'react';

function CurrencyConvertor() {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState('');

  const handleSubmit = () => {
    if (rupees && !isNaN(rupees)) {
      const euroValue = (parseFloat(rupees) / 90).toFixed(2); // Assuming 1€ ≈ ₹90
      setEuro(euroValue);
    } else {
      alert("Please enter a valid amount in Rupees.");
    }
  };

  return (
    <div className="component-box">
      <h2>Currency Convertor (INR ➡ EUR)</h2>
      <input
        type="text"
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
        placeholder="Enter amount in ₹"
      />
      <button onClick={handleSubmit}>Convert</button>
      {euro && <p>€ {euro}</p>}
    </div>
  );
}

export default CurrencyConvertor;
