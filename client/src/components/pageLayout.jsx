import React from "react";
import { NavBar } from "../components/navBar";
import { Footer } from "../components/footer";
import background from "../blackwp1.jpg";

export function PageLayout({ children }) {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        background: "rgb(227, 227, 227)",
        backgroundImage: "url(" + background + ")",
        backgroundSize: 2000,
        position: "absolute",
      }}
    >
      <NavBar />

      {children}

      <Footer />
    </div>
  );
}
