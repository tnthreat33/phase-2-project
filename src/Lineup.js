import React, { useState } from 'react';
import './App.css';

function Lineup({ lineup }) {
  const [currentLineup, setCurrentLineup] = useState(lineup);

  function removePlayer(id) {
    const updatedLineup = currentLineup.filter(player => player.id !== id);
    setCurrentLineup(updatedLineup);
  }

  return (
    <div className="Lineup">
      <h2>Current Lineup</h2>
      {currentLineup.length > 0 ? (
        currentLineup.map((player) => (
          <div key={player.id}>
            <h4>
            #{player.jersey} {player.name} 
            </h4>
            <button onClick={() => removePlayer(player.id)}>X</button>
          </div>
        ))
      ) : (
        <p>No players in lineup</p>
      )}
    </div>
  );
}

export default Lineup;