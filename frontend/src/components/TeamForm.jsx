import { useState } from "react";
import axios from "axios";

const API = "http://localhost:5000/api/teams";

export default function TeamForm({ onTeamAdded }) {
  const [form, setForm] = useState({ name: "", description: "", members: 0 });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(API, form);
      setForm({ name: "", description: "", members: 0 });
      onTeamAdded(); // refresh list
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <h2>Add Team</h2>
      <input
        name="name"
        placeholder="Team Name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
      />
      <input
        name="members"
        type="number"
        placeholder="Members"
        value={form.members}
        onChange={handleChange}
      />
      <button type="submit">Add Team</button>
    </form>
  );
}