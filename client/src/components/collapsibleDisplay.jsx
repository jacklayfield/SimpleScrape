import React, { useState } from "react";
import useCollapse from "react-collapsed";
import "../styling/collapsible.css";

export function CollapsibleDisplay() {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  function handleOnClick() {
    setExpanded(!isExpanded);
  }
  return (
    <div className="collapsible">
      <div className="header" {...getToggleProps({ onClick: handleOnClick })}>
        {isExpanded ? "Collapse" : "Expand"}
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
