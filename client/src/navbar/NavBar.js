import React, { Component } from "react";
import { Link } from "react-router-dom"
import photo from "../photo.jpg";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <div>
        <div className="Photo-container">
          <img src={photo} className="Profile-photo img-responsive img-circle center-block" alt="Headshot"/>
        </div>
        <p className="Nav-text Nav-name">Rachel Rosalia</p>
        <hr className="Nav-text" />
        <Link to="/" className="btn btn-block Nav-button">Home</Link>
        <Link to="/projects" className="btn btn-block Nav-button">Projects</Link>
        <Link to="/work" className="btn btn-block Nav-button">Work</Link>
      </div>
    );
  };
}

export default NavBar;