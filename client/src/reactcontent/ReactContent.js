import React, { Component } from "react";
import logo from "../logo.svg";
import "./ReactContent.css";

class ReactContent extends Component {
  render() {
    return (
      <div className="React">
        <div className="React-header">
          <img src={logo} className="React-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="React-intro">
          To get started, edit <code>src/reactcontent/React.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default ReactContent;