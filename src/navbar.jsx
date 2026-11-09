
import { Link, NavLink } from "react-router-dom";

function Navbar({ favoritesCount = 0 }) {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        VELORA<span>.</span>
      </Link>

      <div className="nav-links">
        <NavLink to="/discover">
          Discover
        </NavLink>

        <NavLink to="/collections">
          Collections
        </NavLink>

        <NavLink to="/builder">
          Outfit Builder
        </NavLink>
      </div>

      <Link to="/favorites" className="favorite-nav">
        ♡ Favorites <span>{favoritesCount}</span>
      </Link>
    </nav>
  );
}

export default Navbar;
