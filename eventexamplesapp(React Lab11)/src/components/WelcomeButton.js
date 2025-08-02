// src/components/WelcomeButton.js
import React from 'react';

function WelcomeButton() {
  const sayMessage = (message) => {
    alert(message);
  };

  return (
    <div className="component-box">
      <h2>Say Welcome</h2>
      <button onClick={() => sayMessage("Welcome!")}>Say Welcome</button>
    </div>
  );
}

export default WelcomeButton;

