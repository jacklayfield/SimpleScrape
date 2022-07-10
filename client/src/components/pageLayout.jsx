import React from "react";
import { NavBar } from "../components/navBar";
import { Footer } from "../components/footer";

export function PageLayout({ children }) {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        background: "#dfdfdf",
      }}
    >
      <NavBar />

      <div
        style={{
          width: "100%",
          background: "#dfdfdf",
          paddingBottom: 900,
          paddingTop: 87,
        }}
      >
        {children}
      </div>

      <Footer />
    </div>
  );
}
