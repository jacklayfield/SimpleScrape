import React from "react";
import { NavBar } from "../components/navBar";
import { Footer } from "../components/footer";
import background from "../blackwp1.jpg";

export function PageLayout({ children }) {
  return (
    <div
      style={{
        height: "100vh",
        background: "rgb(227, 227, 227)",
        backgroundImage: "url(" + background + ")",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        overflowY: "auto",
      }}
    >
      <NavBar />

      <div
        style={{
          paddingBottom: 62,
          paddingTop: 81,
        }}
      >
        {children}
      </div>

      <Footer />
    </div>
  );
}
