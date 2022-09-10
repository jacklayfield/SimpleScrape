import React from "react";
import { NavBar } from "../components/navBar";
import { Footer } from "../components/footer";
import background from "../blackwp1.jpg";

export function PageLayout({ children }) {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundImage: "url(" + background + ")",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        overflowY: "auto",
      }}
    >
      <NavBar />

      <div
        style={{
          paddingBottom: 20,
          minHeight: "calc(100vh - 113px)",
        }}
      >
        {children}
      </div>

      <Footer />
    </div>
  );
}
