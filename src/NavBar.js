import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';

function NavBar() {
  return (
    <div className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/roster">Roster</NavLink>
      <NavLink to="/lineup">Lineup</NavLink>
    </div>
  );
}

export default NavBar;





