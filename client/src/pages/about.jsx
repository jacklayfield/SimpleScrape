import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styling/about.css";

export function About() {
  return (
    <div>
      <Row className="gx-0">
        <Col>
          <div className="columns">
            <div className="sectionTitles">
              <header className="sectionTitlesText">About</header>
            </div>
            <body className="body">
              Simple Scrape is designed for businesses to connect with a broad
              network of potential parterns, customers, or collaborators with
              similar business interests/areas. It is a web-scraping tool that
              takes in a keyword and scrapes the web for contacts for
              organizations and individuals with similar interests.
            </body>{" "}
            <body className="bodyNote">
              NOTE: It is NOT to be used for spam, or other forms of online
              harrassment.
            </body>{" "}
          </div>
        </Col>
      </Row>

      <Row className="gx-0">
        <Col>
          <div className="columns">
            <div className="sectionTitles">
              <header className="sectionTitlesText">Contact</header>
            </div>
            <body className="body">To be added</body>{" "}
          </div>
        </Col>
      </Row>
    </div>
  );
}
