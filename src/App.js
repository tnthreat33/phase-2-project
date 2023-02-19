import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Roster from './Roster';
import Home from './Home';
import Lineup from './Lineup';

function App() {
  const [players, setPlayers] = useState([]);
  const [lineup, setLineup] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/players')
      .then((r) => r.json())
      .then(setPlayers);
  }, []);

  function handleRemovePlayer(id) {
    const newPlayerList = players.filter((player) => player.id !== id);
    setPlayers(newPlayerList);
  }

  function handleAddToLineup(player) {
    setLineup([...lineup, player]);
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
          <Lineup lineup={lineup} />
        </Route>
        <Route exact path="/">
          <Home players={players} setPlayers={setPlayers} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
