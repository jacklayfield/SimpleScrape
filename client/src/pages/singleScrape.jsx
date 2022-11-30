import React from "react";
import { CollapsibleDisplay } from "../components/collapsibleDisplay";

export function SingleScrape() {
  const handleClick = async (e) => {
    window.location.replace("http://localhost:3000/profile");
  };

  return (
    <div>
      <h1>single scrape page. To be implemented</h1>
      <div
        style={{ background: "gray", padding: "20px", fontSize: "25px" }}
        onClick={handleClick}
      >
        Click here to return to profile
      </div>

      <CollapsibleDisplay />
    </div>
  );
}
