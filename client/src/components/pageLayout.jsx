import React from "react";
import { NavBar } from "../components/navBar";
import { Footer } from "../components/footer";
import background from "../background1.jpg";

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
      <div
        style={{
          width: "100%",
          background: "rgb(227, 227, 227)",
          paddingBottom: 32,
          backgroundImage: "url(" + background + ")",
          backgroundSize: 2000,
          paddingTop: 87,
        }}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
}
