// src/App.js
import React, { useState } from 'react';
import './App.css';
import GuestPage from './components/GuestPage';
import UserPage from './components/UserPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => setIsLoggedIn(prev => !prev);

  return (
    <div className="App">
      <h1>✈️ Ticket Booking App</h1>
      <button className="toggle-btn" onClick={toggleLogin}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
      {isLoggedIn ? <UserPage /> : <GuestPage />}
    </div>
  );
}

export default App;
