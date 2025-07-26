import React from 'react';
import CalculateScore from './Components/CalculateScore';
import './Stylesheets/mystyle.css';

function App() {
  return (
    <div className="App">
      <h1 className="app-title">Score Calculator App</h1>
      <CalculateScore 
        name="John Doe"
        school="Green Valley High"
        total={450}
        goal={5}
      />
    </div>
  );
}

export default App;