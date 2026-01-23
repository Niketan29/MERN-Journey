import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const User = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("User not found...");
    }

    const data = await response.json();

    setUsers(data);
  };

  useEffect(() => {
    fetchUsers().catch((err) => console.log(err.message));
  }, []);

  return (
    <div>
      {users.map((user) => {
        return (
          <div
            key={user.id}
            style={{
              border: "1px solid gray",
              margin: "10px",
              padding: "12px",
              borderRadius: "10px",
              backgroundColor: "white",
            }}
          >
            <h4>{user.name}</h4>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
            <p>{user.company?.name}</p>
            <button
              style={{
                padding: "8px 12px",
                backgroundColor: "black",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
              onClick={() => navigate(`/users/${user.id}`)}
            >
              View Details
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default User;
