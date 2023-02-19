import React from 'react'
import PlayerForm from './PlayerForm';


function Home({players, setPlayers}) {
 
  return (
    <div >
      <header>
        Center Grove Softball
      </header>
     <PlayerForm players={players} setPlayers={setPlayers}/>
      
    </div>
  );
}

export default Home;