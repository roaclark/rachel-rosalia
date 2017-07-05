import React from "react";
import { Link } from "react-router-dom";
import photo from "../photo.jpg";
import "./NavBar.css";

function NavBar() {
  return (
    <div>
      <div className="Photo-container">
        <img src={photo} className="Profile-photo img-responsive img-circle center-block" alt="Headshot"/>
      </div>
      <p className="Nav-text Nav-name">Rachel Rosalia</p>
      <hr className="Nav-text" />
      <Link to="/" className="btn Nav-button">About Me</Link>
      <Link to="/work" className="btn Nav-button">Work History</Link>
      <Link to="/projects" className="btn Nav-button">Projects</Link>
      <Link to="/contact" className="btn Nav-button">Contact</Link>
    </div>
  );
};

export default NavBar;