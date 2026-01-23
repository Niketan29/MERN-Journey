import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ padding: "12px" }}>
      <nav style={{ display: "flex", gap: "20px" }}>
        <NavLink
          to="/"
          end
          style={({ isActive }) => ({
            color: isActive ? "orange" : "black",
            fontSize:"1.5rem",
            textDecoration: "none",
            fontWeight: "bold",
          })}
        >
          Home
        </NavLink>

        <NavLink
          to="/users"
          style={({ isActive }) => ({
            color: isActive ? "orange" : "black",
            fontSize:"1.5rem",
            textDecoration: "none",
            fontWeight: "bold",
          })}
        >
          Users
        </NavLink>

        <NavLink
          to="/dashboard"
          style={({ isActive }) => ({
            color: isActive ? "orange" : "black",
            fontSize:"1.5rem",
            textDecoration: "none",
            fontWeight: "bold",
          })}
        >
          Dashboard
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
