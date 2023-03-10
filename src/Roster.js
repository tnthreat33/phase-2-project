import React from "react";
import PlayerCard from "./PlayerCard";


function Roster({ players, handleRemovePlayer, handleAddToLineup }) {
  function handleDeleteClick(player) {
    fetch(`http://localhost:3000/players/${player.id}`, {
      method: 'DELETE',
    });
    handleRemovePlayer(player.id);
  }

  function handleAddClick(player) {
    handleAddToLineup(player);
  }

  return (
    <PlayerCard players={players} handleDeleteClick={handleDeleteClick} handleAddClick={handleAddClick}/>
    
  );
}

export default Roster;