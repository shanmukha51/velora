
function SearchBar({ search, setSearch }) {
  return (
    <div className="search-bar">
      <span className="search-icon">⌕</span>

      <input
        type="text"
        placeholder="Search outfits, styles, colors..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      {search && (
        <button
          className="clear-search"
          onClick={() => setSearch("")}
          aria-label="Clear search"
        >
          ✕
        </button>
      )}
    </div>
  );
}

export default SearchBar;
