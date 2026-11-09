
import { useNavigate } from "react-router-dom";

function CollectionCard({ collection }) {
  const navigate = useNavigate();

  function openCollection() {
    navigate(
      `/collections/${encodeURIComponent(collection.category)}`
    );
  }

  return (
    <button
      className="collection-card"
      onClick={openCollection}
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
