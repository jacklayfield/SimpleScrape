import React from "react";
import { NavBar } from "../components/navBar";
import { Footer } from "../components/footer";
import "../styling/layout.css";

export function PageLayout({ children }) {
  return (
    <div className="outerLayout">
      <NavBar />
      <div className="childLayout">{children}</div>
      <Footer />
    </div>
  );
}
