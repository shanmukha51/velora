
import CollectionCard from "./components/CollectionCard";

function Collections({ collections, onSelect }) {
  return (
    <section className="collections" id="styles">
      <div className="section-heading">
        <div>
          <p className="eyebrow">EXPLORE YOUR AESTHETIC</p>

          <h2>
            What's your <em>mood?</em>
          </h2>
        </div>

        <p className="heading-note">
          Six edits.
          <br />
          Endless inspiration.
        </p>
      </div>

      <div className="collection-grid">
        {collections.map((collection) => (
          <CollectionCard
            key={collection.name}
            collection={collection}
            onSelect={onSelect}
          />
        ))}
      </div>
    </section>
  );
}

export default Collections;
