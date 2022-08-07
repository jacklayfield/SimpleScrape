import React from "react";
import "../styling/outline.css";

export function Footer() {
  return (
    <footer style={{ background: "#DAA520" }} class="text-center " id="footer">
      <div
        class="text-center p-1"
        style={{
          background: "#212529",
          color: "#777777",
          fontFamily: "Trebuchet MS",
          fontStyle: "italic",
        }}
        id="poweredby"
      >
        Created by&nbsp;
        <a href="https://github.com/jacklayfield">Jack Layfield</a>
      </div>
    </footer>
  );
}
