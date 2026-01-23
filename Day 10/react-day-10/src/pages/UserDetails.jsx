import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  const [users, setUsers] = useState(null);
  const navigate = useNavigate();
  const fetchuser = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
    );

    if (!response.ok) {
      throw new Error("User not found...");
    }

    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchuser().catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      {users && (
        <>
          <h4>{users.name}</h4>
          <p>{users.email}</p>
          <p>{users.phone}</p>
          <p>{users.website}</p>
          <p>{users.company?.name}</p>
        </>
      )}
      {!users && <h2>Loading User...</h2>}
      <button
        style={{ padding: "10px" }}
        onClick={() => navigate("/users")}
      >Back to Users List</button>
    </div>
  );
};

export default UserDetails;
