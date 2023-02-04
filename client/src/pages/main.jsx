import axios from "axios";
import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useViewport } from "../hooks/useViewport";
import "../styling/main.css";
import "../styling/theme.css";

export function Main() {
  const [keyword, setKeyword] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleReq = async (e) => {
    e.preventDefault();
    const newKeyword = {
      keyword,
    };
    try {
      setLoading(true);
      const res = await axios.post("/api/scrapeData", newKeyword);
      console.log(res.data._id);
      localStorage.removeItem("scrapeID");
      localStorage.setItem("scrapeID", res.data._id);
      setLoading(false);
      window.location.replace("http://localhost:3000/report");
    } catch (error) {
      console.log("error with posting");
    }
  };

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

        <Col xs={5}>
          <div className="keywordBox">
            <form id="newtask" onSubmit={handleReq}>
              <div className="sectionTitles">
                <header className="sectionTitlesText">Scrape Data</header>
              </div>
              <div className="keywordBoxContainer">
                <input
                  className="keywordBoxField"
                  type="text"
                  placeholder="Enter a keyword"
                  onChange={(e) => setKeyword(e.target.value)}
                />
              </div>

              <div style={{ textAlign: "center", paddingBottom: "20px" }}>
                <button type="submit" className="submitButton">
                  <span class="glyphicon glyphicon-off"></span> Scrape
                </button>
              </div>
              {loading && (
                <div className="loading-msg">
                  Scraping Data... Sit tight this may take up to a minute
                  <div className="loading-spinner"></div>
                </div>
              )}
            </form>
          </div>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
}
