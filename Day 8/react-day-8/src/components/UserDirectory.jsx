import React from "react";
import fetchApi from "../services/api";
import { useState } from "react";
import { useEffect } from "react";

const UserDirectory = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "search") {
      setSearch(e.target.value);
    }
  };

  useEffect(() => {
    const loader = async () => {
      setLoading(true);
      setError("");
      try {
        const data = await fetchApi();
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loader();
  }, []);

  const filteredUser = user.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="userDirectory">
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search user by name..."
        value={search}
        onChange={handleChange}
      />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading &&
        !error &&
        filteredUser.map((user) => (
          <div key={user.id}>
            <h2 id="name">{user.name}</h2>
            <p id="email">{user.email}</p>
            <p id="phone">{user.phone}</p>
            <p id="website">{user.website}</p>
            <p id="c_name">{user.company?.name}</p>
          </div>
        ))}
    </div>
  );
};

export default UserDirectory;
