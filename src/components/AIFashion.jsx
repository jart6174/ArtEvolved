import React, { useState } from "react";
import aiFashion from "../assets/ai-fashion.jpg";

function AIFashion() {
  const [clickCount, setClickCount] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const handleImageClick = () => {
    setClickCount((prev) => {
      const newCount = prev + 1;
      if (newCount === 5) {
        setShowEasterEgg(true);
      }
      return newCount;
    });
  };

  return (
    <section style={{ margin: "2rem auto", textAlign: "center" }}>
      <h2>AI-Generated Fashion 🤖👗</h2>
      <img
        src={aiFashion}
        alt="AI Fashion"
        style={{
          width: "80%",
          maxWidth: "600px",
          borderRadius: "10px",
          cursor: "pointer",
          boxShadow: "0 0 15px rgba(0,0,0,0.3)",
          userSelect: "none",
          transition: "transform 0.3s",
        }}
        onClick={handleImageClick}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      />
      <p style={{ maxWidth: "700px", margin: "1rem auto" }}>
        AI-generated fashion is revolutionizing the industry by using algorithms and
        machine learning to design innovative, personalized, and sustainable clothing.
        This fusion of creativity and technology opens new horizons for style and expression.
      </p>
      {showEasterEgg && (
        <p style={{ marginTop: "1rem", color: "#8a2be2", fontWeight: "bold" }}>
          🌟 Easter Egg: AI fashion is reshaping creativity with endless possibilities!
        </p>
      )}
    </section>
  );
}

export default AIFashion;




