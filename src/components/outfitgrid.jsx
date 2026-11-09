import OutfitGrid from "./components/OutfitGrid";

function OutfitGrid({
  outfits = [],
  favorites = [],
  onFavorite,
  onDetails,
}) {
  // Check if outfits are available
  if (!Array.isArray(outfits) || outfits.length === 0) {
    return (
      <div className="empty-state">
        <h3>No outfits found</h3>
        <p>Try another category or search term.</p>
      </div>
    );
  }

  return (
    <div className="outfit-grid">
      {outfits.map((outfit, index) => (
        <OutfitCard
          key={outfit.id || index}
          outfit={outfit}
          index={index}
          isFavorite={favorites.includes(outfit.id)}
          onFavorite={onFavorite}
          onDetails={onDetails}
        />
      ))}
    </div>
  );
}

export default OutfitGrid;