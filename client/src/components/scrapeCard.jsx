import React from "react";
import "../styling/outline.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function ScrapeCard({ scrapeCard }) {
  return (
    <div
      style={{
        background: "lightgray",
        borderRadius: "0px",
        textAlign: "center",
      }}
    >
      <Row>
        <Col>
          <div
            style={{
              textAlign: "end",
              paddingTop: 10,
              paddingRight: 10,
              paddingBottom: 0,
            }}
          >
            <i style={{ color: "darkred" }} class="fa-solid fa-xmark fa-xl"></i>
          </div>

          <Row className="gx-0">
            <h4>{scrapeCard}</h4>

            <text> 10/17/21 | 10:56 PM </text>
            <text style={{ paddingBottom: "20px" }}>Results: 259</text>
            <Col>
              <div class="d-grid gap-2">
                <button
                  style={{
                    borderRadius: "0px",
                    padding: "20px",
                    background: "#5dd55d",
                    borderWidth: "0px",
                  }}
                  class="btn btn-success"
                  type="button"
                >
                  <i class="fa-solid fa-file-arrow-down fa-xl"></i>
                  <> </> Download
                </button>
              </div>
            </Col>
            <Col>
              <div class="d-grid gap-2">
                <button
                  style={{
                    borderRadius: "0px",
                    padding: "20px",
                    background: "#66b3ff",
                    borderWidth: "0px",
                  }}
                  class="btn btn-primary"
                  type="button"
                >
                  <i class="fa-solid fa-file-lines fa-xl"></i>
                  <> </> Preview
                </button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
