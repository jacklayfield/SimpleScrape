import React from "react";
import "../styling/outline.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function ScrapeCard({ scrapeCard }) {
  return (
    <div
      style={{
        background: "lightgray",
        border: "2px solid",
        borderRadius: "10px",
        borderColor: "gray",
        textAlign: "center",
        padding: 10,
      }}
    >
      <h1>{scrapeCard}</h1>
      <div>
        <Row>
          <Col>
            <button type="sumbit" class="btn btn-success btn-default pull-left">
              <span class="glyphicon glyphicon-off"></span> Download
            </button>
          </Col>{" "}
          <Col>
            {" "}
            <button type="sumbit" class="btn btn-warning btn-default pull-left">
              <span class="glyphicon glyphicon-off"></span> Preview
            </button>
          </Col>
        </Row>
      </div>
    </div>
  );
}
