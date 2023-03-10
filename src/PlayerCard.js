import React from "react";

function PlayerCard ({players, handleDeleteClick, handleAddClick}){
    
    return(
        players.length > 0 &&
    players.map((player) => (
      <div key={player.id} className="card">
        <h4>
          {player.name} #{player.jersey}
        </h4>
        <p>Position: {player.position}</p>
        <p>Class: {player.class}</p>
        <button onClick={() => handleDeleteClick(player)}>Remove From Roster</button>
        <button onClick={() => handleAddClick(player)}>Add to Lineup</button>
      </div>
    ))
    )
}

export default PlayerCard;