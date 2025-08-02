// src/App.js
import React from 'react';
import './App.css';
import Counter from './components/Counter';
import WelcomeButton from './components/WelcomeButton';
import SyntheticClick from './components/SyntheticClick';
import CurrencyConvertor from './components/CurrencyConvertor';

function App() {
  return (
    <div className="App">
      <h1>🎯 Event Handling in React</h1>
      <Counter />
      <WelcomeButton />
      <SyntheticClick />
      <CurrencyConvertor />
    </div>
  );
}

export default App;
