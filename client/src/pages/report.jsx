import React, { useState } from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styling/theme.css";

export function Report() {
  const [viewReport, setViewReport] = useState(false);
  const [data, setData] = useState([""]);
  const [sites, setSites] = useState([""]);

  const handleViewReport = async () => {
    try {
      const res = await axios.get(
        "/api/scrapeData/id=" + localStorage.getItem("scrapeID")
      );

      setData(res.data.rawData);
      setSites(res.data.rawWebsites);
      console.log(data);
      console.log(sites);
    } catch (error) {
      console.log("error with posting1");
    }
    setViewReport(true);
  };

  const handleHideReport = () => {
    setViewReport(false);
  };

  return (
    <div>
      <Row className="gx-0">
        <Col></Col>
        <Col xs={9}>
          <div className="columns">
            <div className="sectionTitles">
              <header className="sectionTitlesText">Report</header>
            </div>
            <div
              style={{
                padding: 20,
              }}
            >
              {!viewReport ? (
                <div>
                  {" "}
                  <button
                    onClick={handleViewReport}
                    className="submitButton centered"
                  >
                    <span class="glyphicon glyphicon-off"></span> View Report
                    Contents
                  </button>
                </div>
              ) : (
                <div style={{ paddingBottom: "10px" }}>
                  <button
                    onClick={handleHideReport}
                    className="submitButton centered"
                  >
                    <span class="glyphicon glyphicon-off"></span> Hide Report
                    Contents
                  </button>
                </div>
              )}

              {viewReport && (
                <div>
                  <div
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                      paddingBottom: "20px",
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    Top Emails and Phone numbers to get you started:{" "}
                  </div>
                  {data.slice(0, 7).map((a) => (
                    <div
                      style={{
                        paddingBottom: 10,
                        textAlign: "center",
                        color: "white",
                      }}
                    >
                      {a}
                    </div>
                  ))}
                  <div
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    List of potentially helpful websites:{" "}
                  </div>
                  {sites.map((a) => (
                    <div
                      style={{
                        paddingBottom: 10,
                        textAlign: "center",
                        color: "white",
                      }}
                    >
                      {a}
                    </div>
                  ))}
                  <div
                    style={{
                      paddingBottom: 10,
                      textAlign: "center",
                      color: "white",
                    }}
                  ></div>
                </div>
              )}
            </div>
          </div>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
}
