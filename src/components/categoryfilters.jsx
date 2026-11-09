
function CategoryFilters({
  categories,
  activeCategory,
  setActiveCategory,
  showFavorites,
  setShowFavorites,
  favoritesCount,
}) {
  return (
    <div className="filter-row">
      <div className="category-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={
              activeCategory === category
                ? "filter active"
                : "filter"
            }
            onClick={() => {
              setActiveCategory(category);
              setShowFavorites(false);
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <button
        className={`favorites-filter ${
          showFavorites ? "active" : ""
        }`}
        onClick={() => setShowFavorites((previous) => !previous)}
      >
        ♡ Saved ({favoritesCount})
      </button>
    </div>
  );
}

export default CategoryFilters;
