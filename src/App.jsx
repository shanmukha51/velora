
import "./App.css";

const outfits = [
  {
    name: "Soft Minimal",
    category: "Casual",
    price: "₹1,499",
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600",
  },
  {
    name: "Street Style",
    category: "Streetwear",
    price: "₹2,199",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600",
  },
  {
    name: "Elegant Evening",
    category: "Party",
    price: "₹2,799",
    image:
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600",
  },
];

function App() {
  return (
    <div className="velora">
      <nav className="navbar">
        <h2>VELORA</h2>
        <div>
          <a href="#discover">Discover</a>
          <a href="#collections">Collections</a>
          <a href="#about">About</a>
        </div>
      </nav>

      <section className="hero">
        <div>
          <p className="small">YOUR STYLE. YOUR STORY.</p>

          <h1>
            Discover a style
            <br />
            that feels like <i>you.</i>
          </h1>

          <p className="description">
            Explore fashion inspiration, discover outfits,
            and create your own signature look.
          </p>

          <a className="discover-btn" href="#discover">
            Explore outfits →
          </a>
        </div>
      </section>

      <section className="categories" id="collections">
        <p className="small">EXPLORE YOUR STYLE</p>
        <h2>Find your aesthetic</h2>

        <div className="category-list">
          <span>Minimal</span>
          <span>Streetwear</span>
          <span>Casual</span>
          <span>Party</span>
          <span>Elegant</span>
        </div>
      </section>

      <section className="outfits" id="discover">
        <div className="section-heading">
          <div>
            <p className="small">THE VELORA EDIT</p>
            <h2>Outfits to inspire</h2>
          </div>
          <span>Discover your next look ↗</span>
        </div>

        <div className="outfit-grid">
          {outfits.map((outfit) => (
            <article className="outfit-card" key={outfit.name}>
              <img src={outfit.image} alt={outfit.name} />

              <div className="outfit-info">
                <div>
                  <h3>{outfit.name}</h3>
                  <p>{outfit.category}</p>
                </div>

                <strong>{outfit.price}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer id="about">
        <h2>VELORA</h2>
        <p>Fashion is personal. Discover yours.</p>
      </footer>
    </div>
  );
}

export default App;
