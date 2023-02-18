import logo from './logo.svg';
import './App.css';
import React,{useState, useEffect} from 'react'

function App() {
  const [players, setPlayers]= useState({})
  useEffect(() => {
    fetch("http://localhost:3000/players")
      .then((r) => r.json())
      .then(setPlayers);
  }, []);
  

  return (
    <div className="App">
      <header className="App-header">
      
      </header>
    </div>
  );
}

export default App;
