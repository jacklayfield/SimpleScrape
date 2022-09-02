import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styling/about.css";
import { ScrapeCards } from "../components/scrapeCards";
// import cheerio from "cheerio";

export function Profile() {
  const cards = [
    "MyScrape1",
    "Example",
    "Big Scrape",
    "Scrape22",
    "Test Scrape",
  ];
  const half = Math.ceil(cards.length / 2);
  const half1 = cards.slice(0, half);
  const half2 = cards.slice(half, cards.length);
  return (
    <div>
      <Row className="gx-0">
        <Col>
          <div className="columns">
            <div className="sectionTitles">
              <header className="sectionTitlesText">My Scrape Results</header>
            </div>
            <Row>
              <Col>
                <ScrapeCards scrapeCards={half1}></ScrapeCards>
              </Col>
              <Col>
                <ScrapeCards scrapeCards={half2}></ScrapeCards>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      <Row className="gx-0">
        <Col>
          <div className="columns">
            <div className="sectionTitles">
              <header className="sectionTitlesText">My Information</header>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
