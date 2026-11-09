import React from "react";

function Footer({
  openDiscover,
  openBuilder,
  scrollToSection,
}) {
  const handleBackToTop = () => {
    scrollToSection("home");
  };

  return (
    <footer className="footer" id="about">
      <div className="footer-top">
        <div className="footer-brand">
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
          <button onClick={openDiscover}>
            Discover
          </button>

          <button
            onClick={() => scrollToSection("styles")}
          >
            Collections
          </button>

          <button onClick={openBuilder}>
            Outfit Builder
          </button>

          <button onClick={handleBackToTop}>
            Back to top ↑
          </button>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 VELORA</span>

        <span>
          FASHION · INSPO · PERSONAL STYLE
        </span>
      </div>
    </footer>
  );
}

export default Footer;