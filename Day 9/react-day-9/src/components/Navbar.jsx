import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbarWrapper">
      <nav className="navbar">
        <div className="navbarLogo">React Router</div>

        <div className="navLinks">
          <NavLink
            to="/"
            className={({ isActive }) =>
            isActive ? "navLink activeLink" : "navLink"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/users"
            className={({ isActive }) =>
            isActive ? "navLink activeLink" : "navLink"
            }
          >
            Users
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
