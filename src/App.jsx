import { useEffect, useMemo, useState } from "react";
import "./App.css";

const outfits = [
  {
    id: 1,
    name: "The Everyday Muse",
    category: "Casual",
    occasion: "Everyday",
    price: "₹1,499",
    color: "Cream",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=900",
    description: "A relaxed everyday look with soft neutrals and effortless styling.",
    tags: ["Casual", "Minimal", "Everyday"],
  },
  {
    id: 2,
    name: "City Girl Energy",
    category: "Streetwear",
    occasion: "Outing",
    price: "₹2,199",
    color: "Black",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=900",
    description: "A confident street-inspired outfit with modern city energy.",
    tags: ["Streetwear", "Trendy", "Outing"],
  },
  {
    id: 3,
    name: "Golden Hour",
    category: "Elegant",
    occasion: "Dinner",
    price: "₹2,799",
    color: "Brown",
    image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=900",
    description: "Warm tones and polished details create a timeless elegant look.",
    tags: ["Elegant", "Dinner", "Chic"],
  },
  {
    id: 4,
    name: "Soft Romance",
    category: "Dresses",
    occasion: "Date",
    price: "₹1,899",
    color: "Pink",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=900",
    description: "A feminine outfit with a soft and romantic aesthetic.",
    tags: ["Dresses", "Romantic", "Date"],
  },
  {
    id: 5,
    name: "Modern Muse",
    category: "Casual",
    occasion: "College",
    price: "₹1,699",
    color: "White",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900",
    description: "A contemporary look with clean lines and easy styling.",
    tags: ["College", "Casual", "Minimal"],
  },
  {
    id: 6,
    name: "After Hours",
    category: "Party",
    occasion: "Party",
    price: "₹2,499",
    color: "Black",
    image: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?w=900",
    description: "A bold evening-inspired look with a fashionable edge.",
    tags: ["Party", "Trendy", "Evening"],
  },
  {
    id: 7,
    name: "Weekend Mood",
    category: "Streetwear",
    occasion: "Outing",
    price: "₹1,999",
    color: "Blue",
    image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=900",
    description: "A relaxed street-style outfit for weekend adventures.",
    tags: ["Streetwear", "Casual", "Weekend"],
  },
  {
    id: 8,
    name: "The Chic Edit",
    category: "Elegant",
    occasion: "Dinner",
    price: "₹2,999",
    color: "Beige",
    image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=900",
    description: "A sophisticated outfit inspired by timeless fashion.",
    tags: ["Elegant", "Dinner", "Chic"],
  },
  {
    id: 9,
    name: "Coffee Date",
    category: "Casual",
    occasion: "Date",
    price: "₹1,799",
    color: "Tan",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900",
    description: "An easy, polished outfit for coffee dates and relaxed outings.",
    tags: ["Casual", "Date", "Soft"],
  },
  {
    id: 10,
    name: "Denim Days",
    category: "Streetwear",
    occasion: "Everyday",
    price: "₹2,099",
    color: "Denim Blue",
    image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?w=900",
    description: "A denim-inspired outfit with a cool everyday attitude.",
    tags: ["Denim", "Streetwear", "Everyday"],
  },
  {
    id: 11,
    name: "Blush Dream",
    category: "Dresses",
    occasion: "Party",
    price: "₹2,399",
    color: "Blush",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=900",
    description: "Soft blush tones and graceful styling for special moments.",
    tags: ["Dresses", "Party", "Feminine"],
  },
  {
    id: 12,
    name: "Campus Classic",
    category: "Casual",
    occasion: "College",
    price: "₹1,599",
    color: "White and Blue",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=900",
    description: "A fresh, comfortable outfit for everyday campus life.",
    tags: ["College", "Casual", "Comfort"],
  },
  {
    id: 13,
    name: "Midnight Muse",
    category: "Party",
    occasion: "Evening",
    price: "₹2,699",
    color: "Black",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=900",
    description: "A sleek evening look inspired by modern fashion.",
    tags: ["Party", "Evening", "Bold"],
  },
  {
    id: 14,
    name: "Quiet Luxury",
    category: "Elegant",
    occasion: "Dinner",
    price: "₹3,199",
    color: "Ivory",
    image: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=900",
    description: "Understated elegance with neutral colors and refined details.",
    tags: ["Elegant", "Minimal", "Luxury"],
  },
  {
    id: 15,
    name: "Sunday Softness",
    category: "Casual",
    occasion: "Weekend",
    price: "₹1,899",
    color: "Beige",
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=900",
    description: "A soft, relaxed look for slow weekends and casual plans.",
    tags: ["Casual", "Weekend", "Comfort"],
  },
  {
    id: 16,
    name: "Runway Mood",
    category: "Streetwear",
    occasion: "Outing",
    price: "₹2,899",
    color: "Neutral",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900",
    description: "A fashion-forward outfit with editorial-inspired styling.",
    tags: ["Streetwear", "Fashion", "Trendy"],
  },
];

const collections = [
  {
    name: "Casual Edit",
    category: "Casual",
    subtitle: "01 / EVERYDAY STYLE",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900",
  },
  {
    name: "Elegant Edit",
    category: "Elegant",
    subtitle: "02 / TIMELESS CHIC",
    image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=900",
  },
  {
    name: "Street Style",
    category: "Streetwear",
    subtitle: "03 / CITY ENERGY",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=900",
  },
  {
    name: "Dress Edit",
    category: "Dresses",
    subtitle: "04 / SOFT & FEMININE",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=900",
  },
  {
    name: "College Looks",
    category: "Casual",
    subtitle: "05 / CAMPUS DAYS",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=900",
  },
  {
    name: "Party Looks",
    category: "Party",
    subtitle: "06 / AFTER HOURS",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=900",
  },
];

const categories = [
  "All Styles",
  "Casual",
  "Streetwear",
  "Elegant",
  "Dresses",
  "Party",
];

const stylingGuides = {
  Casual: {
    shoes: ["White sneakers", "Ballet flats", "Neutral sandals"],
    bags: ["Canvas tote", "Mini shoulder bag", "Crossbody bag"],
    jewelry: ["Small gold hoops", "Minimal necklace", "Simple bracelet"],
    accessories: ["Sunglasses", "Watch", "Hair claw clip"],
    layers: ["Denim jacket", "Light cardigan", "Oversized shirt"],
    tip: "Keep the look comfortable and balanced. Choose one accessory that stands out.",
  },
  Streetwear: {
    shoes: ["Chunky sneakers", "High-top sneakers", "Platform shoes"],
    bags: ["Crossbody bag", "Mini backpack", "Structured shoulder bag"],
    jewelry: ["Silver hoops", "Layered chains", "Statement rings"],
    accessories: ["Baseball cap", "Sunglasses", "Belt"],
    layers: ["Oversized blazer", "Denim jacket", "Bomber jacket"],
    tip: "Mix relaxed shapes with one structured piece. Layering gives the outfit more personality.",
  },
  Elegant: {
    shoes: ["Kitten heels", "Pointed flats", "Strappy heels"],
    bags: ["Structured handbag", "Mini clutch", "Elegant shoulder bag"],
    jewelry: ["Pearl earrings", "Delicate gold necklace", "Classic bracelet"],
    accessories: ["Silk scarf", "Watch", "Minimal hair clip"],
    layers: ["Tailored blazer", "Long coat", "Soft shawl"],
    tip: "Choose refined accessories and keep the color palette coordinated.",
  },
  Dresses: {
    shoes: ["Ballet flats", "Strappy sandals", "Low heels"],
    bags: ["Mini handbag", "Small shoulder bag", "Woven bag"],
    jewelry: ["Delicate earrings", "Fine necklace", "Slim bracelet"],
    accessories: ["Hair ribbon", "Sunglasses", "Small hair clip"],
    layers: ["Light cardigan", "Cropped jacket", "Soft shawl"],
    tip: "Let the dress be the main focus. Add delicate accessories instead of too many statement pieces.",
  },
  Party: {
    shoes: ["Strappy heels", "Metallic heels", "Dressy pointed flats"],
    bags: ["Mini clutch", "Metallic handbag", "Small shoulder bag"],
    jewelry: ["Statement earrings", "Layered bracelets", "Shimmering necklace"],
    accessories: ["Hair clips", "Statement belt", "Evening sunglasses"],
    layers: ["Cropped blazer", "Satin jacket", "Elegant wrap"],
    tip: "Pick one statement accessory and keep the rest of the look balanced.",
  },
};

function getSavedFavorites() {
  try {
    const saved = JSON.parse(
      localStorage.getItem("velora-favorites") || "[]"
    );

    if (!Array.isArray(saved)) return [];

    return saved.filter((id) =>
      outfits.some((outfit) => outfit.id === id)
    );
  } catch {
    return [];
  }
}

function getSavedOutfits() {
  try {
    const saved = JSON.parse(
      localStorage.getItem("velora-custom-outfits") || "[]"
    );

    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function getStylingGuide(outfit) {
  return stylingGuides[outfit.category] || stylingGuides.Casual;
}

function getOutfitText(outfit) {
  return [
    outfit.name,
    outfit.category,
    outfit.occasion,
    outfit.color,
    outfit.description,
    ...(outfit.tags || []),
  ]
    .join(" ")
    .toLowerCase();
}

function App() {
  const [activeCategory, setActiveCategory] = useState("All Styles");
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState(getSavedFavorites);
  const [selectedOutfit, setSelectedOutfit] = useState(null);
  const [showFavorites, setShowFavorites] = useState(false);

  const [activePage, setActivePage] = useState("discover");
  const [builderOccasion, setBuilderOccasion] = useState("College");
  const [builderStyle, setBuilderStyle] = useState("Casual");
  const [generatedOutfit, setGeneratedOutfit] = useState(null);
  const [customOutfits, setCustomOutfits] = useState(getSavedOutfits);

  useEffect(() => {
    try {
      localStorage.setItem(
        "velora-favorites",
        JSON.stringify(favorites)
      );
    } catch {
      console.warn("Could not save favorites.");
    }
  }, [favorites]);

  useEffect(() => {
    try {
      localStorage.setItem(
        "velora-custom-outfits",
        JSON.stringify(customOutfits)
      );
    } catch {
      console.warn("Could not save custom outfits.");
    }
  }, [customOutfits]);

  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") {
        setSelectedOutfit(null);
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const allOutfits = useMemo(
    () => [...outfits, ...customOutfits],
    [customOutfits]
  );

  const filteredOutfits = useMemo(() => {
    const searchText = search.trim().toLowerCase();

    return allOutfits.filter((outfit) => {
      const matchesCategory =
        activeCategory === "All Styles" ||
        outfit.category === activeCategory;

      const matchesSearch =
        !searchText || getOutfitText(outfit).includes(searchText);

      const matchesFavorites =
        !showFavorites || favorites.includes(outfit.id);

      return matchesCategory && matchesSearch && matchesFavorites;
    });
  }, [
    allOutfits,
    activeCategory,
    search,
    showFavorites,
    favorites,
  ]);

  function toggleFavorite(id) {
    setFavorites((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  }

  function resetFilters() {
    setActiveCategory("All Styles");
    setSearch("");
    setShowFavorites(false);
  }

  function scrollToSection(id) {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  }

  function selectCollection(category) {
    setActiveCategory(category);
    setSearch("");
    setShowFavorites(false);
    setActivePage("discover");

    setTimeout(() => scrollToSection("discover"), 50);
  }

  function openDiscover() {
    setActivePage("discover");
    resetFilters();

    setTimeout(() => scrollToSection("discover"), 50);
  }

  function openBuilder() {
    setActivePage("builder");
    setGeneratedOutfit(null);

    setTimeout(() => scrollToSection("builder"), 50);
  }

  function generateOutfit() {
    const matching = allOutfits.filter(
      (outfit) =>
        outfit.category === builderStyle &&
        outfit.occasion.toLowerCase() ===
          builderOccasion.toLowerCase()
    );

    const matchingStyle = allOutfits.filter(
      (outfit) => outfit.category === builderStyle
    );

    const matchingOccasion = allOutfits.filter(
      (outfit) =>
        outfit.occasion.toLowerCase() ===
        builderOccasion.toLowerCase()
    );

    const pool =
      matching.length > 0
        ? matching
        : matchingStyle.length > 0
        ? matchingStyle
        : matchingOccasion.length > 0
        ? matchingOccasion
        : allOutfits;

    const randomOutfit =
      pool[Math.floor(Math.random() * pool.length)];

    setGeneratedOutfit(randomOutfit);
  }

  function saveGeneratedOutfit() {
    if (!generatedOutfit) return;

    toggleFavorite(generatedOutfit.id);
  }

  function openFavorites() {
    setShowFavorites(true);
    setActiveCategory("All Styles");
    setSearch("");
    setActivePage("discover");

    setTimeout(() => scrollToSection("discover"), 50);
  }

  function openDetails(outfit) {
    setSelectedOutfit(outfit);
  }

  return (
    <div className="velora">
      {/* NAVIGATION */}

      <nav className="navbar">
        <a
          className="logo"
          href="#home"
          onClick={() => setActivePage("discover")}
        >
          VELORA<span>.</span>
        </a>

        <div className="nav-links">
          <button
            className={activePage === "discover" ? "nav-active" : ""}
            onClick={openDiscover}
          >
            Discover
          </button>

          <button
            className={activePage === "collections" ? "nav-active" : ""}
            onClick={() => {
              setActivePage("collections");
              scrollToSection("styles");
            }}
          >
            Collections
          </button>

          <button
            className={activePage === "builder" ? "nav-active" : ""}
            onClick={openBuilder}
          >
            Outfit Builder
          </button>
        </div>

        <button
          className={`favorite-nav ${showFavorites ? "active" : ""}`}
          onClick={openFavorites}
        >
          ♡ Favorites <span>{favorites.length}</span>
        </button>
      </nav>

      {/* HERO */}

      <section className="hero" id="home">
        <div className="hero-image" />

        <div className="hero-content">
          <p className="eyebrow">YOUR STYLE. YOUR STORY.</p>

          <h1>
            Fashion that
            <br />
            feels like <em>you.</em>
          </h1>

          <p className="hero-description">
            Discover your aesthetic, explore fresh outfit
            inspiration, and find the looks that make
            you feel effortlessly confident.
          </p>

          <div className="hero-actions">
            <button className="hero-button" onClick={openDiscover}>
              Discover your style <span>↗</span>
            </button>

            <button className="hero-secondary" onClick={openBuilder}>
              Create an outfit <span>✦</span>
            </button>
          </div>

          <div className="hero-bottom">
            <span>01 — PERSONAL STYLE</span>
            <span>FASHION · INSPO · YOU</span>
          </div>
        </div>

        <div className="hero-label">
          THE NEW
          <br />
          FASHION EDIT
        </div>
      </section>

      {/* INTRO */}

      <section className="intro">
        <div className="intro-left">
          <p className="eyebrow">A LITTLE MORE YOU</p>

          <h2>
            Find your vibe.
            <br />
            <em>Own your look.</em>
          </h2>
        </div>

        <div className="intro-right">
          <p>
            From everyday casual to bold night-out
            looks, explore fashion that celebrates
            your personality.
          </p>

          <button onClick={openDiscover}>
            Explore the collection ↗
          </button>
        </div>
      </section>

      {/* COLLECTIONS */}

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
          {collections.map((collection, index) => (
            <button
              className="collection-card"
              key={collection.name}
              onClick={() => selectCollection(collection.category)}
            >
              <img
                src={collection.image}
                alt={`${collection.name} fashion inspiration`}
                loading="lazy"
              />

              <div className="collection-overlay">
                <span>{collection.subtitle}</span>
                <h3>{collection.name}</h3>
                <span className="collection-arrow">↗</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* OUTFIT BUILDER */}

      <section className="builder" id="builder">
        <div className="builder-heading">
          <div>
            <p className="eyebrow">YOUR PERSONAL STYLE STUDIO</p>

            <h2>
              Create your
              <br />
              <em>next look.</em>
            </h2>
          </div>

          <div className="builder-heading-note">
            <span>✦</span>
            <p>
              Choose your mood.
              <br />
              We'll find your outfit.
            </p>
          </div>
        </div>

        <div className="builder-layout">
          <div className="builder-controls">
            <div className="builder-field">
              <label htmlFor="builder-occasion">01 — OCCASION</label>

              <select
                id="builder-occasion"
                value={builderOccasion}
                onChange={(event) =>
                  setBuilderOccasion(event.target.value)
                }
              >
                <option value="College">College</option>
                <option value="Everyday">Everyday</option>
                <option value="Outing">Outing</option>
                <option value="Dinner">Dinner</option>
                <option value="Date">Date</option>
                <option value="Party">Party</option>
                <option value="Evening">Evening</option>
                <option value="Weekend">Weekend</option>
              </select>
            </div>

            <div className="builder-field">
              <label htmlFor="builder-style">02 — STYLE</label>

              <select
                id="builder-style"
                value={builderStyle}
                onChange={(event) =>
                  setBuilderStyle(event.target.value)
                }
              >
                <option value="Casual">Casual</option>
                <option value="Streetwear">Streetwear</option>
                <option value="Elegant">Elegant</option>
                <option value="Dresses">Dresses</option>
                <option value="Party">Party</option>
              </select>
            </div>

            <button className="generate-button" onClick={generateOutfit}>
              Generate my outfit <span>✦</span>
            </button>

            <p className="builder-small-note">
              A little inspiration for your next fashion moment.
            </p>
          </div>

          <div className="builder-result">
            {generatedOutfit ? (
              <div className="generated-card">
                <img
                  src={generatedOutfit.image}
                  alt={generatedOutfit.name}
                />

                <div className="generated-overlay">
                  <span>YOUR STYLE MATCH</span>
                  <h3>{generatedOutfit.name}</h3>

                  <button
                    onClick={() => openDetails(generatedOutfit)}
                  >
                    View complete styling ↗
                  </button>
                </div>

                <button
                  className={`generated-heart ${
                    favorites.includes(generatedOutfit.id)
                      ? "liked"
                      : ""
                  }`}
                  onClick={saveGeneratedOutfit}
                >
                  {favorites.includes(generatedOutfit.id)
                    ? "♥"
                    : "♡"}
                </button>
              </div>
            ) : (
              <div className="builder-placeholder">
                <span className="placeholder-symbol">✳</span>

                <h3>Your next look awaits.</h3>

                <p>
                  Select an occasion and style.
                  <br />
                  Your outfit inspiration will appear here.
                </p>

                <span className="placeholder-bottom">
                  VELORA STYLE STUDIO / 01
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* DISCOVER */}

      <section className="discover" id="discover">
        <div className="discover-heading">
          <div>
            <p className="eyebrow">
              {showFavorites ? "YOUR PERSONAL COLLECTION" : "THE VELORA EDIT"}
            </p>

            <h2>
              {showFavorites ? (
                <>
                  Your <em>favorites.</em>
                </>
              ) : (
                <>
                  Looks you'll <em>love.</em>
                </>
              )}
            </h2>
          </div>

          <p className="discover-note">
            {showFavorites
              ? "Your saved style inspiration."
              : "Your next outfit starts here."}
          </p>
        </div>

        {/* SEARCH */}

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

        {/* FILTERS */}

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
            ♡ Saved ({favorites.length})
          </button>
        </div>

        {/* OUTFIT CARDS */}

        <div className="outfit-grid">
          {filteredOutfits.map((outfit, index) => (
            <article className="outfit-card" key={outfit.id}>
              <div className="outfit-image">
                <img
                  src={outfit.image}
                  alt={outfit.name}
                  loading="lazy"
                />

                <span className="image-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <button
                  className={`heart-button ${
                    favorites.includes(outfit.id) ? "liked" : ""
                  }`}
                  aria-label={
                    favorites.includes(outfit.id)
                      ? "Remove from favorites"
                      : "Save to favorites"
                  }
                  onClick={() => toggleFavorite(outfit.id)}
                >
                  {favorites.includes(outfit.id) ? "♥" : "♡"}
                </button>

                <button
                  className="view-button"
                  onClick={() => openDetails(outfit)}
                >
                  Style this look ↗
                </button>
              </div>

              <div className="outfit-info">
                <div>
                  <p className="outfit-category">
                    {outfit.category} / {outfit.occasion}
                  </p>

                  <h3>{outfit.name}</h3>

                  <p className="outfit-color">
                    Color: {outfit.color}
                  </p>
                </div>

                <span className="outfit-price">{outfit.price}</span>
              </div>
            </article>
          ))}
        </div>

        {/* EMPTY RESULTS */}

        {filteredOutfits.length === 0 && (
          <div className="empty-state">
            <span>♡</span>

            <h3>No outfits found</h3>

            <p>
              Try another style, search, or explore
              the full collection.
            </p>

            <button onClick={resetFilters}>
              Explore all outfits ↗
            </button>
          </div>
        )}

        <div className="discover-footer">
          <span>SHOWING {filteredOutfits.length} LOOKS</span>

          <button onClick={resetFilters}>Reset filters ↗</button>
        </div>
      </section>

      {/* STYLE MESSAGE */}

      <section className="style-message">
        <p className="eyebrow">YOUR STYLE IS YOUR SIGNATURE</p>

        <h2>
          Wear what makes
          <br />
          you feel <em>beautiful.</em>
        </h2>

        <p>
          Trends come and go. Your personal style
          is what makes every outfit yours.
        </p>

        <button onClick={openBuilder}>
          Create your next look ↗
        </button>
      </section>

      {/* FOOTER */}

      <footer className="footer" id="about">
        <div className="footer-top">
          <div>
            <a className="logo footer-logo" href="#home">
              VELORA<span>.</span>
            </a>

            <p>
              Fashion inspiration for every
              <br />
              version of you.
            </p>
          </div>

          <div className="footer-links">
            <button onClick={openDiscover}>Discover</button>

            <button
              onClick={() => scrollToSection("styles")}
            >
              Collections
            </button>

            <button onClick={openBuilder}>Outfit Builder</button>

            <button onClick={() => scrollToSection("home")}>
              Back to top ↑
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 VELORA</span>
          <span>FASHION · INSPO · PERSONAL STYLE</span>
        </div>
      </footer>

      {/* OUTFIT DETAILS MODAL */}

      {selectedOutfit && (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedOutfit(null)}
        >
          <div
            className="outfit-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="outfit-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              aria-label="Close outfit details"
              onClick={() => setSelectedOutfit(null)}
            >
              ✕
            </button>

            <img
              className="modal-image"
              src={selectedOutfit.image}
              alt={selectedOutfit.name}
            />

            <div className="modal-content">
              <p className="eyebrow">
                {selectedOutfit.category} / {selectedOutfit.occasion}
              </p>

              <h2 id="outfit-modal-title">
                {selectedOutfit.name}
              </h2>

              <p>{selectedOutfit.description}</p>

              <p className="outfit-color">
                Color: {selectedOutfit.color}
              </p>

              <div className="modal-tags">
                {selectedOutfit.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              {/* STYLING RECOMMENDATIONS */}

              <div className="styling-guide">
                <div className="styling-guide-heading">
                  <span>✦</span>

                  <div>
                    <p className="eyebrow">THE COMPLETE LOOK</p>
                    <h3>Style it your way.</h3>
                  </div>
                </div>

                <p className="styling-tip">
                  {getStylingGuide(selectedOutfit).tip}
                </p>

                {[
                  ["Shoes", getStylingGuide(selectedOutfit).shoes],
                  ["Bags", getStylingGuide(selectedOutfit).bags],
                  ["Jewelry", getStylingGuide(selectedOutfit).jewelry],
                  ["Accessories", getStylingGuide(selectedOutfit).accessories],
                  ["Layering", getStylingGuide(selectedOutfit).layers],
                ].map(([title, items]) => (
                  <div className="styling-row" key={title}>
                    <span>{title}</span>

                    <div className="styling-options">
                      {items.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="modal-bottom">
                <strong>{selectedOutfit.price}</strong>

                <button
                  onClick={() => toggleFavorite(selectedOutfit.id)}
                >
                  {favorites.includes(selectedOutfit.id)
                    ? "♥ Saved"
                    : "♡ Save look"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;