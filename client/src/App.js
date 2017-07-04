import React, { Component } from "react";

import ContentContainer from "./content-common/content-container/ContentContainer.js";
import SampleContent from "./content/sample/SampleContent.js";
import ReactContent from "./content/reactcontent/ReactContent.js";
import NavBar from "./navbar/NavBar.js";

import { Route, Switch } from "react-router-dom";

class SampleContentContainer extends Component {
  render() {
    return (
      <ContentContainer>
        <SampleContent />
      </ContentContainer>
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
            <Route exact path="/" component={ReactContent}/>
            <Route path="/work" component={SampleContentContainer}/>
          </Switch>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
