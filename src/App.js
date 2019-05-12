import React, { Component } from 'react';
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import Dashboard from './components/Dashboard'
import Ledger from './components/Ledger'

import './App.css';



class App extends Component {

  render() {
    const hist = createBrowserHistory();
    return (
      <div className="App">
        <Router history={hist}>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/ledger' component={Ledger} />
        </Router>
      </div>
    );
  }
}

export default (App);