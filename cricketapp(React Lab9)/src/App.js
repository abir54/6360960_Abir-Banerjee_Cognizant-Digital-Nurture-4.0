// src/App.js
import React, { useState } from 'react';
import './App.css';
import ListOfPlayers from './components/ListOfPlayers';
import IndianPlayers from './components/IndianPlayers';

function App() {
  const [flag, setFlag] = useState(true);

  return (
    <div className="App">
      <h1>🏏 Cricket App</h1>
      <button onClick={() => setFlag(!flag)}>
        Toggle View
      </button>
      {flag ? <ListOfPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;
