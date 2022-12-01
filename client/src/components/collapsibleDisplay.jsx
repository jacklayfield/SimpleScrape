import React, { useState } from "react";
import useCollapse from "react-collapsed";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styling/collapsible.css";

export function CollapsibleDisplay({ type }) {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  function handleOnClick() {
    setExpanded(!isExpanded);
  }
  return (
    <div className="collapsible">
      <div className="header" {...getToggleProps({ onClick: handleOnClick })}>
        <Row>
          <Col>
            {" "}
            {isExpanded
              ? type + " (Click to Hide)"
              : type + " (Click to Expand)"}
          </Col>
          <Col></Col>
          <Col>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              {" "}
              {isExpanded ? (
                <i
                  style={{
                    color: "#66ccff",
                  }}
                  class="fa-solid fa-angle-up"
                ></i>
              ) : (
                <i
                  style={{ color: "#66ccff" }}
                  class="fa-solid fa-angle-down"
                ></i>
              )}
            </div>{" "}
          </Col>
        </Row>
      </div>
      <div {...getCollapseProps()}>
        <div className="content">
          Example1 <br />
          Example2 <br />
          Example3 <br />
          Example4 <br />
          Example5 <br />
        </div>
      </div>
    </div>
  );
}
