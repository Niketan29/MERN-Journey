import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
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
    fetchUsers().catch(err=>console.log(err.message));
  }, []);

  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h4>{user.name}</h4>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
            <p>{user.company?.name}</p>
            <Link to={`/users/${user.id}`}>View Details</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
