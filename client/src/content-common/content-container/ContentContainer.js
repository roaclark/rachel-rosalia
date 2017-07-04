import React, { Component } from "react";
import "./ContentContainer.css";

class ContentContainer extends Component {
  render() {
    return (
      <div className="Content-container">
        {this.props.children}
      </div>
    );
  }
}

export default ContentContainer;