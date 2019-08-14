import React from "react";
import "./App.css";
import Dashboard from "./components/dashboard";
import Ledger from "./components/ledger";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Header from "./components/elements/header";

const App = () => {
  const hist = createBrowserHistory();
  return (
    <div className="App">
              <Header />
      <Router history={hist}>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/ledger" component={Ledger} />
      </Router>
    </div>
  );
};

export default App;
