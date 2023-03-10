import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Roster from './Roster';
import Home from './Home';
import Lineup from './Lineup';
import './App.css';

function App() {
  const [players, setPlayers] = useState([]);
  const [lineup, setLineup] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/players')
      .then((r) => r.json())
      .then((data) => setPlayers(data));
  }, []);

  function handleRemovePlayer(id) {
    const newPlayerList = players.filter((player) => player.id !== id);
    setPlayers(newPlayerList);
  }
  function handleAddPlayer(player){
    setPlayers([...players, player])
  }

  function handleAddToLineup(player) {
    setLineup([...lineup, player]);
  }
  function removeLineupPlayer(id) {
    const updatedLineup = lineup.filter(player => player.id !== id);
    setLineup(updatedLineup);
  }

  return (
    <div>
      <NavBar />

      <Switch>
        <Route path="/roster">
          <Roster
            players={players}
            handleRemovePlayer={handleRemovePlayer}
            handleAddToLineup={handleAddToLineup}
          />
        </Route>
        <Route path="/lineup">
          <Lineup lineup={lineup} removePlayer= {removeLineupPlayer}/>
        </Route>
        <Route  path="/">
          <Home addPlayer = {handleAddPlayer} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;