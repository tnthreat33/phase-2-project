import './App.css';
import React,{useState, useEffect} from 'react'
import Roster from "./Roster.js"
import Home from "./Home.js"
import { Route, Switch, NavLink } from "react-router-dom";
import NavBar from './NavBar';


function App() {
  const [players, setPlayers]= useState([])

  useEffect(() => {
    fetch("http://localhost:3000/players")
      .then((r) => r.json())
      .then(setPlayers);
  }, []);

  function handleRemovePlayer(id) {
    const newPlayerList = players.filter((player) => player.id !== id);
    setPlayers(newPlayerList);
  }

  return (
    <div>
      <NavBar/>
   
    <Switch>
      <Route path = "/roster">
        <Roster players={players} handleRemovePlayer={handleRemovePlayer}/>
      </Route>
      <Route exact path = "/">
        <Home players={players} setPlayers={setPlayers}/>
      </Route>
     </Switch>
     </div>
  );
}

export default App;
