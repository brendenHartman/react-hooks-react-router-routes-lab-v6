import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink className="nav-link" to="/">Home</NavLink>
      <NavLink className="nav-link" to="/directors">Directors</NavLink>
      <NavLink className="nav-link" to="/actors">Actors</NavLink>
    </nav>
    );
};

export default NavBar;
