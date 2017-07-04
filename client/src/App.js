import React, { Component } from "react";

import ContentContainer from "./content-common/content-container/ContentContainer.js";
import AboutContent from "./content/about/AboutContent.js";
import WorkContent from "./content/work/WorkContent.js";
import ProjectsContent from "./content/projects/ProjectsContent.js";
import ContactContent from "./content/contact/ContactContent.js";
import NavBar from "./navbar/NavBar.js";

import { Route, Switch } from "react-router-dom";

function WrapContent(Comp) {
  return () => {
    return (
      <ContentContainer>
        <Comp />
      </ContentContainer>
    );
  }
};

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-3 col-md-2 border Nav-bar-column"><NavBar /></div>
        <div className="col-sm-9 col-md-10 border">
          <Switch>
            <Route exact path="/" component={WrapContent(AboutContent)}/>
            <Route path="/work" component={WrapContent(WorkContent)}/>
            <Route path="/projects" component={WrapContent(ProjectsContent)}/>
            <Route path="/contact" component={WrapContent(ContactContent)}/>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default App;
