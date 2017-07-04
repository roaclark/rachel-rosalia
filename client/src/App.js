import React, { Component } from "react";
import logo from "./logo.svg";
import photo from "./photo.jpg";
import "./App.css";

import { Route, Switch, Link } from "react-router-dom"


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

class MainContent extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
      <div className="row">
        <div className="col-sm-2 border Nav-bar-column"><NavBar /></div>
        <div className="col-sm-10 border">
          <Switch>
            <Route exact path="/" component={MainContent}/>
          </Switch>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
