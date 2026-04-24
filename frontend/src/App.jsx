import { useEffect, useState } from "react";
import axios from "axios";
import TeamForm from "./components/TeamForm";
import TeamList from "./components/TeamList";

const API = "http://localhost:5000/api/teams";

function App() {
  const [teams, setTeams] = useState([]);

  const fetchTeams = async () => {
    const res = await axios.get(API);
    setTeams(res.data);
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto", fontFamily: "sans-serif" }}>
      <h1>🏆 Teams Manager</h1>
      <TeamForm onTeamAdded={fetchTeams} />
      <TeamList teams={teams} onRefresh={fetchTeams} />
    </div>
  );
}

export default App;