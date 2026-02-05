import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <h1>My App</h1>
      <nav>
        <NavLink
          to="/login"
          style={({ isActive }) => ({ color: isActive ? "blue" : "black" })}
        >
          Login
        </NavLink>
        <NavLink
          to="/register"
          style={({ isActive }) => ({ color: isActive ? "blue" : "black" })}
        >
          Register
        </NavLink>
        <NavLink
          to="/dashboard"
          style={({ isActive }) => ({ color: isActive ? "blue" : "black" })}
        >
          Dashboard
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
