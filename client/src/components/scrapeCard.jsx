import React from "react";
import "../styling/outline.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function ScrapeCard({ scrapeCard }) {
  return (
    <div
      style={{
        background: "#212529",
        border: "2px solid",
        borderRadius: "10px",
        borderColor: "gray",
        textAlign: "center",
        padding: 10,
      }}
    >
      <h4 style={{ color: "lightgray" }}>{scrapeCard}</h4>
      <Row>
        <div style={{ paddingBottom: 10 }} class="d-grid gap-2">
          <button class="btn btn-success" type="button">
            <i class="fa-solid fa-file-arrow-down fa-lg"></i>
          </button>{" "}
        </div>
        <div class="d-grid gap-2">
          <button class="btn btn-primary" type="button">
            <i class="fa-solid fa-file-lines fa-lg"></i>
          </button>
        </div>
      </Row>
    </div>
  );
}
