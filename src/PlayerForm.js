import React, { useState } from "react";

function PlayerForm({ players, setPlayers }) {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/players", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => {
        setPlayers([data, ...players]);
        setForm({})
      });
  };

  return (
    <div className= "form">
      <h2>New Player</h2>
      <form onSubmit={handleSubmit} >
        <input
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Player name"
        />
        <input
          onChange={handleChange}
          type="text"
          name="position"
          placeholder="Position"
        />
        <input
          onChange={handleChange}
          type="text"
          name="jersey"
          placeholder="Jersey Number"
        />
        <input
          onChange={handleChange}
          type="text"
          name="class"
          placeholder="Class"
        />
        <button type="submit">Add Player</button>
      </form>
    </div>
  );
}

export default PlayerForm;
