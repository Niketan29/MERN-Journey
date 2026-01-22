import React from "react";
import fetchApi from "../services/api";
import { useState } from "react";
import { useEffect } from "react";

const UserDirectory = () => {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState([]);

  const handleChange = (e) => {
    if (e.target.name === "search") {
      setSearch(e.target.value);
    }
  };

  useEffect(() => {
    const loader = async () => {
      if (search.trim() === "") {
        setUser([]);
        return;
      }
      const data = await fetchApi(search);
      setUser([data]);
    };
    loader();
  }, [search]);

  const filteredUser = user.filter((item) => item.id === Number(search));

  return (
    <div className="userDirectory">
      <input
        type="search"
        name="search"
        id="search"
        value={search}
        placeholder="Enter user id (1-10)"
        onChange={handleChange}
      />
      {filteredUser.map((user) => (
        <>
          <h2 id="name">{user.name}</h2>
          <p id="email">{user.email}</p>
          <p id="phone">{user.phone}</p>
          <p id="website">{user.website}</p>
          <p id="c_name">{user.company?.name}</p>
        </>
      ))}
    </div>
  );
};

export default UserDirectory;
