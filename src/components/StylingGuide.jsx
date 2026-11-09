import React from "react";

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

function StylingGuide({ outfit }) {
  if (!outfit) {
    return null;
  }

  const guide =
    stylingGuides[outfit.category] || stylingGuides.Casual;

  const guideItems = [
    ["Shoes", guide.shoes],
    ["Bags", guide.bags],
    ["Jewelry", guide.jewelry],
    ["Accessories", guide.accessories],
    ["Layering", guide.layers],
  ];

  return (
    <section className="styling-guide">
      <div className="styling-guide-heading">
        <span>STYLE NOTES</span>

        <h3>Complete your look</h3>

        <p>
          Simple styling ideas to make this outfit feel
          completely yours.
        </p>
      </div>

      <div className="styling-guide-content">
        {guideItems.map(([title, items]) => (
          <div className="styling-guide-item" key={title}>
            <h4>{title}</h4>

            <ul>
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="styling-guide-tip">
        <span>STYLE TIP</span>
        <p>{guide.tip}</p>
      </div>
    </section>
  );
}

export default StylingGuide;