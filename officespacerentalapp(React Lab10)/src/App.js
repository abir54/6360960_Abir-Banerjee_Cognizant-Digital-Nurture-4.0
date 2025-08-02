// src/App.js
import React from 'react';
import './App.css';
import OfficeList from './components/OfficeList';

function App() {
  const heading = <h1 className="main-heading">🏢 Office Space Rental Listings</h1>;

  return (
    <div className="App">
      {heading}
      <OfficeList />
    </div>
  );
}

export default App;
