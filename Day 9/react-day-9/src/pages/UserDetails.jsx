import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  const [users, setUsers] = useState(null);

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
      {!users && (<h2>Loading User...</h2>)}
      <Link to={`/users`}>back to users list</Link>
    </div>
  );
};

export default UserDetails;
