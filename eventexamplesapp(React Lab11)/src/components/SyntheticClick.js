// src/components/SyntheticClick.js
import React from 'react';

function SyntheticClick() {
  const handleClick = (event) => {
    console.log(event); // SyntheticEvent object
    alert("I was clicked");
  };

  return (
    <div className="component-box">
      <h2>Synthetic Event</h2>
      <button onClick={handleClick}>OnPress</button>
    </div>
  );
}

export default SyntheticClick;
