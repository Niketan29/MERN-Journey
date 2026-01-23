const UserCard = ({ user }) => {
  return (
    <div className="userCard">
      <div className="image">
        <img src={user.image} alt={user.name} />
      </div>

      <div className="info">
        <h2>{user.name}</h2>
        <h4>{user.role}</h4>

        <div className="skills">
          {user.skills.map((skill, index) => (
            <span key={index} className="skill">
              {skill}
            </span>
          ))}
        </div>

        <button>View Profile</button>
      </div>
    </div>
  );
};

export default UserCard;
