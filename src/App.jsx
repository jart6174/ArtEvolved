import React, { useState } from "react";
import CavePaintings from "./components/CavePaintings";
import DigitalArt from "./components/DigitalArt";
import GraffitiArt from "./components/GraffitiArt";
import AIArt from "./components/AIfashion";
import AIFashion from "./components/AIfashion";

function App() {
  const [isCRT, setIsCRT] = useState(false);

  const toggleCRT = () => setIsCRT(!isCRT);

  return (
    <div className={`container ${isCRT ? "crt" : ""}`}>
      <div style={{ textAlign: "center", paddingTop: "40px" }}>
        <h1 style={{ fontFamily: "'Orbitron', sans-serif" }}>🎨 ArtEvolved</h1>
        <p style={{ fontFamily: "monospace", fontStyle: "none", fontSize: "18px" }}>
          The journey of art & fashion across time.
        </p>
        <button
          onClick={toggleCRT}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            fontFamily: "inherit",
            cursor: "pointer",
          }}
        >
          {isCRT ? "Disable CRT" : "Enable CRT"}
        </button>
      </div>

      <div style={{ marginTop: "40px", padding: "0 20px" }}>
        <CavePaintings />
        <DigitalArt />
        <GraffitiArt />
        <AIFashion />
      </div>

      <footer
        style={{
          marginTop: "60px",
          textAlign: "center",
          fontSize: "14px",
          opacity: "0.6",
          color: "lime",
          fontFamily: "'Courier New', monospace",
          paddingBottom: "20px",
        }}
      >
        © {new Date().getFullYear()} ArtEvolved — A Timeless IPGC Project. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
