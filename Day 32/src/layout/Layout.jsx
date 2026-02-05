import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <h2>My App</h2>
      <nav>
        <NavLink
          to="/login"
          style={({ isActive }) => ({ color: isActive ? "blue" : "black" })}
        >
          Login
        </NavLink>
        <NavLink
          to="/dashboard"
          style={({ isActive }) => ({ color: isActive ? "blue" : "black" })}
        >
          Dashboard
        </NavLink>
      </nav>
      <Outlet/>
    </div>
  );
};

export default Layout;
