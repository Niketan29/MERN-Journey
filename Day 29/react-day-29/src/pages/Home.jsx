// import React, { useEffect, useState } from "react";
// import UserCard from "../components/UserCard";

// const Home = () => {
//   const [loading, setLoading] = useState(true);
//   const [users, setUsers] = useState([]);

//   const fetchUser = () => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve([
//           { id: 1, name: "Aman", email: "aman@test.com" },
//           { id: 2, name: "Riya", email: "riya@test.com" },
//         ]);
//       }, 1500);
//     });
//   };

//   useEffect(()=>{

//     fetchUser()
//     .then((user)=>{
//         setUsers(user)
//     })
//     .catch(err=>console.log(err))
//     .finally(
//         ()=>setLoading(false)
//     )

//   },[])

//   return (
//     <div>
//       <h2>Users : </h2>

//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         users.map((user) => <UserCard key={user.id} user={user} />)
//       )}
//     </div>
//   );
// };

// export default Home;


import React, { useEffect, useState } from "react";
import UserCard from "../components/UserCard";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, name: "Aman", email: "aman@test.com" },
          { id: 2, name: "Riya", email: "riya@test.com" },
        ]);
      }, 1500);
    });
  };

  useEffect(() => {
    fetchUsers()
      .then((data) => setUsers(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p>Loading users...</p>;
  }

  if (users.length === 0) {
    return <p>No users found.</p>;
  }

  const handleDelete = (id)=>{
    const updatedUsers = users.filter((user)=>user.id !== id)
    setUsers(updatedUsers)
  }

  return (
    <div className="user-list">
      <h2>User Directory</h2>
      {users.map((user) => (
        <UserCard key={user.id} user={user} onDelete={handleDelete}/>
      ))}
    </div>
  );
};

export default Home;
