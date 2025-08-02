// src/components/ListOfPlayers.js
import React from 'react';

const ListOfPlayers = () => {
  const players = [
    { name: 'Virat', score: 95 },
    { name: 'Rohit', score: 68 },
    { name: 'Dhoni', score: 85 },
    { name: 'Pant', score: 45 },
    { name: 'Shami', score: 80 },
    { name: 'Ashwin', score: 40 },
    { name: 'Jadeja', score: 88 },
    { name: 'Kohli', score: 72 },
    { name: 'Gill', score: 60 },
    { name: 'Iyer', score: 77 },
    { name: 'Bumrah', score: 59 }
  ];

  const filteredPlayers = players.filter(player => player.score >= 70);

  return (
    <div className="component-box">
      <h2>List of Players (Score ≥ 70)</h2>
      <ul>
        {filteredPlayers.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfPlayers;
