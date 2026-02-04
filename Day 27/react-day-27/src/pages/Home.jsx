import React from "react";
import UserCard from "../components/UserCard";
import { useState } from "react";

const Home = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Aman", email: "aman@test.com" },
    { id: 2, name: "Riya", email: "riya@test.com" },
  ]);

  const handleDelete=(id)=>{
    const updatedUsers =  users.filter((user)=>user.id !== id)
    setUsers(updatedUsers)
  }

  return (
    <div>
      {users.length === 0 ? (
        <p>No user found</p>
      ) : (
        users.map((user) => <UserCard key={user.id} user={user} onDelete = {handleDelete}/>)
      )}
    </div>
  );
};

export default Home;
