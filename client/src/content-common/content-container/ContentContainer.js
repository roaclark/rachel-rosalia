import React from "react";
import "./ContentContainer.css";

function ContentContainer(props) {
  return (
    <div className="Content-container">
      {props.children}
    </div>
  );
};

export default ContentContainer;