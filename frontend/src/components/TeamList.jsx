import axios from "axios";

const API = "http://localhost:5000/api/teams";

export default function TeamList({ teams, onRefresh }) {
  const handleDelete = async (id) => {
    await axios.delete(`${API}/${id}`);
    onRefresh();
  };

  return (
    <div>
      <h2>Teams</h2>
      {teams.length === 0 && <p>No teams yet.</p>}
      {teams.map((team) => (
        <div key={team._id} style={{ border: "1px solid #ccc", padding: "0.5rem", marginBottom: "0.5rem" }}>
          <strong>{team.name}</strong> — {team.description} ({team.members} members)
          <button onClick={() => handleDelete(team._id)} style={{ marginLeft: "1rem" }}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}