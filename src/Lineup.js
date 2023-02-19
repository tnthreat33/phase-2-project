import React, { useState } from 'react';

function Lineup({ lineup }) {
  const [currentLineup, setCurrentLineup] = useState(lineup);

  function removePlayer(id) {
    const updatedLineup = currentLineup.filter(player => player.id !== id);
    setCurrentLineup(updatedLineup);
  }

  return (
    <div>
      <h2>Current Lineup</h2>
      {currentLineup.length > 0 ? (
        currentLineup.map((player) => (
          <div key={player.id}>
            <h4>
              {player.name} #{player.jersey}
            </h4>
            <li>Position: {player.position}</li>
            <li>Class: {player.class}</li>
            <button onClick={() => removePlayer(player.id)}>Remove Player</button>
          </div>
        ))
      ) : (
        <p>No players in lineup</p>
      )}
    </div>
  );
}

export default Lineup;