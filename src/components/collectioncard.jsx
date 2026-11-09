
function CollectionCard({ collection, onSelect }) {
  return (
    <button
      className="collection-card"
      onClick={() => onSelect(collection.category)}
    >
      <img
        src={collection.image}
        alt={`${collection.name} fashion`}
        loading="lazy"
      />

      <div className="collection-overlay">
        <span>{collection.subtitle}</span>

        <h3>{collection.name}</h3>

        <span className="collection-arrow">↗</span>
      </div>
    </button>
  );
}

export default CollectionCard;
