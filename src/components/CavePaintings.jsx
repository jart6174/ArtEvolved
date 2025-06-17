import React from "react";
import cavePainting from "../assets/cave-painting.jpg";

function CavePaintings() {
  return (
    <section style={{ margin: "2rem auto", textAlign: "center" }}>
      <h2>🪨 Cave Paintings</h2>
      <img
        src={cavePainting}
        alt="Ancient cave art"
        style={{
          width: "80%",
          maxWidth: "600px",
          borderRadius: "10px",
          boxShadow: "0 0 15px rgba(0,0,0,0.3)",
        }}
      />
      <p style={{ maxWidth: "700px", margin: "1rem auto" }}>
        Cave paintings are among the oldest forms of human expression, dating back over
        40,000 years. They often depict animals, hunting scenes, and early symbolic language.
      </p>
    </section>
  );
}

export default CavePaintings;
