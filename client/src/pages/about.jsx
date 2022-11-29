import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styling/about.css";
import { useViewport } from "../hooks/useViewport";

export function About() {
  const { width } = useViewport();
  const breakpoint = 992;

  return width < breakpoint ? (
    <div>
      <Row className="gx-0">
        <Col>
          <div className="columns" style={{ background: "rgba(0, 0, 0, 0.2)" }}>
            <div
              className="sectionTitles"
              style={{
                background: "#212529",
                color: "lightgray",
              }}
            >
              <header
                className="sectionTitlesText"
                style={{
                  fontWeight: "300",
                  color: "#66ccff",
                }}
              >
                About
              </header>
            </div>
            <div style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>
              <Row>
                <div
                  style={{
                    fontSize: "20px",
                    paddingBottom: "20px",
                  }}
                >
                  Simple Scrape is designed for businesses to connect with a
                  broad network of potential parterns, customers, or
                  collaborators with similar business interests/areas. It is a
                  web-scraping tool that takes in a keyword and scrapes the web
                  for contacts for organizations and individuals with similar
                  interests.
                </div>
                <div
                  style={{
                    fontSize: "20px",
                    paddingBottom: "20px",
                    fontWeight: "600",
                  }}
                >
                  NOTE: It is NOT to be used for advertising, spam, or other
                  forms of online harrassment.
                </div>
              </Row>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="gx-0">
        <Col>
          <div className="columns" style={{ background: "rgba(0, 0, 0, 0.2)" }}>
            <div
              className="sectionTitles"
              style={{
                background: "#212529",
                color: "lightgray",
              }}
            >
              <header
                className="sectionTitlesText"
                style={{
                  fontWeight: "300",
                  color: "#66ccff",
                }}
              >
                Contact
              </header>
            </div>
            <div style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>
              <Row>
                <div
                  style={{
                    fontSize: "20px",
                    paddingBottom: "20px",
                  }}
                >
                  Coming soon
                </div>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  ) : (
    <div>
      <Row className="gx-0">
        <Col></Col>
        <Col xs={9}>
          <div className="columns" style={{ background: "rgba(0, 0, 0, 0.2)" }}>
            <div
              className="sectionTitles"
              style={{
                background: "#212529",
                color: "lightgray",
              }}
            >
              <header
                className="sectionTitlesText"
                style={{
                  fontWeight: "300",
                  color: "#66ccff",
                }}
              >
                About
              </header>
            </div>
            <div
              style={{
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 20,
              }}
            >
              <Row>
                <div
                  style={{
                    fontSize: "20px",
                    paddingBottom: "20px",
                  }}
                >
                  Simple Scrape is designed for businesses to connect with a
                  broad network of potential parterns, customers, or
                  collaborators with similar business interests/areas. It is a
                  web-scraping tool that takes in a keyword and scrapes the web
                  for contacts for organizations and individuals with similar
                  interests.
                </div>
                <div
                  style={{
                    fontSize: "20px",
                    paddingBottom: "20px",
                    fontWeight: "600",
                  }}
                >
                  NOTE: It is NOT to be used for advertising, spam, or other
                  forms of online harrassment.
                </div>
              </Row>
            </div>
          </div>
        </Col>
        <Col></Col>
      </Row>

      <Row className="gx-0">
        <Col></Col>
        <Col xs={9}>
          <div className="columns" style={{ background: "rgba(0, 0, 0, 0.2)" }}>
            <div
              className="sectionTitles"
              style={{
                background: "#212529",
                color: "lightgray",
              }}
            >
              <header
                className="sectionTitlesText"
                style={{
                  fontWeight: "300",
                  color: "#66ccff",
                }}
              >
                Contact
              </header>
            </div>
            <div
              style={{
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 20,
              }}
            >
              <Row>
                <div
                  style={{
                    fontSize: "20px",
                    paddingBottom: "20px",
                  }}
                >
                  Coming soon
                </div>
              </Row>
            </div>
          </div>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
}
