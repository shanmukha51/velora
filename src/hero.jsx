
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
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
          inspiration, and find looks that make you
          feel effortlessly confident.
        </p>

        <div className="hero-actions">
          <button
            className="hero-button"
            onClick={() => navigate("/discover")}
          >
            Discover your style <span>↗</span>
          </button>

          <button
            className="hero-secondary"
            onClick={() => navigate("/builder")}
          >
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
  );
}

export default Hero;
