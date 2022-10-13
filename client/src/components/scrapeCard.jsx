import React from "react";
import "../styling/scrapeCard.css";

export function ScrapeCard({ scrapeCard }) {
  const handleClick = async (e) => {
    window.location.replace("http://localhost:3000/single");
  };

  return (
    <div className="scrapeCard" onClick={handleClick}>
      <h4>{scrapeCard}</h4>

      <text> 10/17/21 | 10:56 PM </text>
      <text style={{ paddingBottom: "20px" }}>Results: 259</text>
    </div>
  );
}
