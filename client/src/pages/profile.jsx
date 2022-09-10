import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styling/about.css";
import { ScrapeCards } from "../components/scrapeCards";
import { useViewport } from "../hooks/useViewport";
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
  const half = Math.ceil(cards.length / 2);
  const half1 = cards.slice(0, half);
  const half2 = cards.slice(half, cards.length);

  const { width } = useViewport();
  const breakpoint = 992;

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
        <Col></Col>
        <Col xs={9}>
          <div className="columns">
            <div className="sectionTitles">
              <header className="sectionTitlesText">My Scrape Results</header>
            </div>
            <div style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>
              <Row>
                <Col>
                  <ScrapeCards scrapeCards={half1}></ScrapeCards>
                </Col>
                <Col>
                  <ScrapeCards scrapeCards={half2}></ScrapeCards>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
        <Col></Col>
      </Row>

      <Row className="gx-0">
        <Col></Col>
        <Col xs={9}>
          <div className="columns">
            <div className="sectionTitles">
              <header className="sectionTitlesText">My Information</header>
            </div>
          </div>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
  // return (

  // );
}
