import React, { useState } from "react";
import graffitiArt from "../assets/graffiti-art.jpg";

function GraffitiArt() {
  const [showTag, setShowTag] = useState(false);

  return (
    <section style={{ margin: "2rem auto", textAlign: "center" }}>
      <h2>🎨 Graffiti</h2>
      <img
        src={graffitiArt}
        alt="Colorful Graffiti Art"
        style={{
          width: "80%",
          maxWidth: "600px",
          borderRadius: "10px",
          boxShadow: "0 0 15px rgba(0,0,0,0.3)",
          cursor: "pointer",
          transition: "transform 0.3s",
          userSelect: "none",
        }}
        onClick={() => setShowTag(!showTag)}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      />
      <p style={{ maxWidth: "700px", margin: "1rem auto" }}>
        Graffiti is a vibrant form of street art that emerged in the late 20th century,
        characterized by bold colors, expressive tags, and often rebellious messages.
        It transforms urban spaces into open-air galleries and gives a voice to youth culture.
      </p>
      {showTag && (
        <p
          style={{
            marginTop: "1rem",
            color: "#ff4500",
            fontWeight: "bold",
            fontFamily: "'Fantasy', Courier, monospace",
            fontSize: "1.2rem",
          }}
        >
          ✒️ Tagged by: StreetArtistX
        </p>
      )}
    </section>
  );
}

export default GraffitiArt;

