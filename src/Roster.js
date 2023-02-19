function Roster({ players, handleRemovePlayer }) {
  function handleDeleteClick(player) {
    fetch(`http://localhost:3000/players/${player.id}`, {
      method: "DELETE",
    });
    handleRemovePlayer(player.id);
  }

  return (
    players.length > 0 &&
    players.map((player) => (
      <div key={player.id}>
        <h4>
          {player.name} #{player.jersey}
        </h4>
        <li>Position: {player.position}</li>
        <li>Class: {player.class}</li>
        <button onClick={() => handleDeleteClick(player)}>
          🗑
        </button>
      </div>
    ))
  );
}

export default Roster;