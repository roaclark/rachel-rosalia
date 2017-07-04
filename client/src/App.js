import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Route, Switch } from 'react-router-dom'


class NavBar extends Component {
  render() {
    return (
      <span className="Nav-bar">
        My pretty pretty navbar
      </span>
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
        <div className="col-sm-3 border Nav-bar-column"><NavBar /></div>
        <div className="col-sm-9 border">
          <Switch>
            <Route exact path='/' component={MainContent}/>
          </Switch>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
