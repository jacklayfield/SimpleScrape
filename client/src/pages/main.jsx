import axios from "axios";
import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styling/main.css";
import "../styling/theme.css";

export function Main() {
  const [keyword, setKeyword] = useState(true);

  const handleReq = async (e) => {
    e.preventDefault();
    const newKeyword = {
      keyword,
    };
    try {
      await axios.post("/api/scrapeData", newKeyword);
      // window.location.replace("http://localhost:3000/scraper");
    } catch (error) {
      console.log("error with posting");
    }
  };

  return (
    <div>
      <Row className="gx-0">
        <Col></Col>

        <Col xs={9}>
          <div className="keywordBox">
            <form id="newtask" onSubmit={handleReq}>
              <div className="sectionTitles">
                <header className="sectionTitlesText">Scrape Data</header>
              </div>
              <div className="keywordBoxField">
                <input
                  type="text"
                  class="form-control"
                  id="author"
                  placeholder="Enter a keyword"
                  onChange={(e) => setKeyword(e.target.value)}
                />
              </div>
              <Row>
                <Col></Col>
                <Col>
                  <div style={{ textAlign: "center", marginBottom: "10px" }}>
                    <button type="submit" class="btn btn-success btn-default">
                      <span class="glyphicon glyphicon-off"></span> Sumbit
                    </button>
                  </div>
                </Col>
                <Col></Col>
              </Row>
            </form>
          </div>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
}
