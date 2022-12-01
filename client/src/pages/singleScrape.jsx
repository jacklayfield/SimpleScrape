import React from "react";
import { CollapsibleDisplay } from "../components/collapsibleDisplay";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styling/theme.css";
import { useViewport } from "../hooks/useViewport";

export function SingleScrape() {
  const { width } = useViewport();
  const breakpoint = 992;

  return width < breakpoint ? (
    <div style={{ paddingTop: 100, fontSize: "30px" }}>
      mobile version coming soon
    </div>
  ) : (
    <div>
      <Row className="gx-0">
        <Col></Col>
        <Col xs={9}>
          <div className="columns">
            <div className="sectionTitles">
              <header className="sectionTitlesText">ScrapeName</header>
            </div>
            <div
              style={{
                padding: 20,
              }}
            >
              <Row>
                <CollapsibleDisplay type="Emails" />
                <CollapsibleDisplay type="Phone Numbers" />
                <CollapsibleDisplay type="Social Media" />
              </Row>
            </div>
          </div>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
}
