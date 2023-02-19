import React from 'react'


function Roster ({players}){
  
    return (
    players.length > 0 && players.map(player =>
      <div key = {player.id}>
      
      <h4>{player.name}  #{player.jersey}</h4>
      <li> Position: {player.position}</li>
      <li> Class: {player.class}</li>
      </div>)
  )
}

export default Roster