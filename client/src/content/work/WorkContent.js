import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import "./WorkContent.css";

function Resume() {
  return <embed id="resume" src="/RachelRosaliaResume.pdf" />;
};

function BasicWorkContent() {
  return (
    <div>
      <h1>My Work History</h1>
      <p>This page is still in development. For now please view my <Link to="/work/resume">resume</Link>.</p>
    </div>
  );
};

function WorkContent() {
  return (
    <Switch>
      <Route exact path="/work" component={BasicWorkContent}/>
      <Route exact path="/work/resume" component={Resume}/>
    </Switch>
  );
};

export default WorkContent;