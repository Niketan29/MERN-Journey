import React from "react";
import { useState } from "react";
import UserCard from "../components/UserCard";

const Home = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [users, setUsers] = useState([]);

    const handleSubmit = (e)=>{
        e.preventDefault();
        
        if(name==="" || email===""){
            alert("Name and Email is required")
            return
        }

        const newUser = {
            id: Date.now(),
            name:name,
            email:email
        }

        setUsers([...users, newUser]);
        setName("");
        setEmail("");
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your name " value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type="email" placeholder="Enter your email " value={email} onChange={(e)=>setEmail(e.target.value)}/>

        <input type="submit" value="Submit" />
      </form>
      <div>
        <h2>Users : </h2>
        {users && users.map((user)=><UserCard key={user.id} user={user}/>)}
      </div>
    </div>
  );
};

export default Home;
