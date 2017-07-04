import React, { Component } from "react";

import ReactContent from "./reactcontent/ReactContent.js"
import NavBar from "./navbar/NavBar.js"

import { Route, Switch } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
      <div className="row">
        <div className="col-sm-2 border Nav-bar-column"><NavBar /></div>
        <div className="col-sm-10 border">
          <Switch>
            <Route exact path="/" component={ReactContent}/>
          </Switch>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
