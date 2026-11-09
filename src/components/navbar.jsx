
function Navbar({ activePage, favoritesCount, onDiscover, onCollections, onBuilder, onFavorites }) {
  return (
    <nav className="navbar">
      <a className="logo" href="#home">
        VELORA<span>.</span>
      </a>

      <div className="nav-links">
        <button
          className={activePage === "discover" ? "nav-active" : ""}
          onClick={onDiscover}
        >
          Discover
        </button>

        <button
          className={activePage === "collections" ? "nav-active" : ""}
          onClick={onCollections}
        >
          Collections
        </button>

        <button
          className={activePage === "builder" ? "nav-active" : ""}
          onClick={onBuilder}
        >
          Outfit Builder
        </button>
      </div>

      <button className="favorite-nav" onClick={onFavorites}>
        ♡ Favorites <span>{favoritesCount}</span>
      </button>
    </nav>
  );
}

export default Navbar;
