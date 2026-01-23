import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ color: "black" }}>Dashboard</h2>

      <div style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
        <NavLink
          to=""
          end
          style={({ isActive }) => ({
            color: isActive ? "orange" : "black",
            textDecoration: "none",
            fontWeight: "bold",
          })}
        >
          Profile
        </NavLink>

        <NavLink
          to="settings"
          style={({ isActive }) => ({
            color: isActive ? "orange" : "black",
            textDecoration: "none",
            fontWeight: "bold",
          })}
        >
          Settings
        </NavLink>
      </div>

      <Outlet />
    </div>
  );
};

export default Dashboard;
