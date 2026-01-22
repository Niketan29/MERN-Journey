import React from "react";
import UserCard from "./UserCard";

const UserList = () => {
  const users = [
    {
      id: 1,
      name: "Niketan",
      role: "Frontend Developer",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      image: "https://i.pravatar.cc/150?img=12",
    },
    {
      id: 2,
      name: "Jay",
      role: "UI/UX Designer",
      skills: ["Figma", "Wireframing", "Prototyping", "Design Systems"],
      image: "https://i.pravatar.cc/150?img=3",
    },
    {
      id: 3,
      name: "Aman",
      role: "Backend Developer",
      skills: ["Node.js", "Express", "MongoDB", "REST APIs"],
      image: "https://i.pravatar.cc/150?img=33",
    },
    {
      id: 4,
      name: "Deepesh",
      role: "Full Stack Developer",
      skills: ["React", "Node.js", "MongoDB", "JWT Auth"],
      image: "https://i.pravatar.cc/150?img=18",
    },
  ];
  return (
    <div className="userList">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
