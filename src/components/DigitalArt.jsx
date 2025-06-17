import React from "react";
import digitalArt from "../assets/digital-art.jpg";

function DigitalArt() {
  return (
    <section style={{ margin: "2rem auto", textAlign: "center" }}>
      <h2>💻 Digital Art</h2>
      <img
        src={digitalArt}
        alt="Colorful digital art"
        style={{
          width: "80%",
          maxWidth: "600px",
          borderRadius: "10px",
          boxShadow: "0 0 15px rgba(0,0,0,0.3)",
        }}
      />
      <p style={{ maxWidth: "700px", margin: "1rem auto" }}>
        Digital art emerged in the late 20th century as artists began using computers and
        software like Photoshop to create vibrant, experimental, and boundary-pushing art.
        It revolutionized how we express creativity in a connected world.
      </p>
    </section>
  );
}

export default DigitalArt;

