import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styling/about.css";
import { ScrapeCards } from "../components/scrapeCards";
// import cheerio from "cheerio";

export function Profile() {
  //this needs work
  const cards = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
  ];
  const quarter = Math.ceil(cards.length / 4);
  const q1 = cards.slice(0, quarter);
  const q2 = cards.slice(quarter, quarter * 2);
  const q3 = cards.slice(quarter * 2, quarter * 3);
  const q4 = cards.slice(quarter * 3, cards.length);
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 620;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return width < breakpoint ? (
    <div>
      <Row className="gx-0">
        <Col>
          <div className="columns">
            <div className="sectionTitles">
              <header className="sectionTitlesText">My Scrape Results</header>
            </div>
            <div style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>
              <Row>
                <Col>
                  <ScrapeCards scrapeCards={cards}></ScrapeCards>
                </Col>
              </Row>
            </div>
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
  ) : (
    <div>
      <Row className="gx-0">
        <Col>
          <div className="columns">
            <div className="sectionTitles">
              <header className="sectionTitlesText">My Scrape Results</header>
            </div>
            <div style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>
              <Row>
                <Col>
                  <ScrapeCards scrapeCards={q1}></ScrapeCards>
                </Col>
                <Col>
                  <ScrapeCards scrapeCards={q2}></ScrapeCards>
                </Col>
                <Col>
                  <ScrapeCards scrapeCards={q3}></ScrapeCards>
                </Col>
                <Col>
                  <ScrapeCards scrapeCards={q4}></ScrapeCards>
                </Col>
              </Row>
            </div>
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
  // return (

  // );
}
