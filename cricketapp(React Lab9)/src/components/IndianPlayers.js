// src/components/IndianPlayers.js
import React from 'react';

const IndianPlayers = () => {
  const T20 = ['Rohit', 'Kohli', 'Gill', 'Pant'];
  const Ranji = ['Pujara', 'Rahane', 'Ishant'];

  const allPlayers = [...T20, ...Ranji];

  const [oddTeam, evenTeam] = allPlayers.reduce(
    ([odds, evens], player, idx) => {
      if (idx % 2 === 0) evens.push(player);
      else odds.push(player);
      return [odds, evens];
    },
    [[], []]
  );

  return (
    <div className="component-box">
      <h2>Indian Players</h2>
      <div>
        <h3>Odd Team</h3>
        <ul>
          {oddTeam.map((player, index) => (
            <li key={index}>{player}</li>
          ))}
        </ul>
        <h3>Even Team</h3>
        <ul>
          {evenTeam.map((player, index) => (
            <li key={index}>{player}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default IndianPlayers;
