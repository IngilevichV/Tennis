import React from "react";
import { Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import HomePage from './HomePage';
import PlayersPage from './PlayersPage';
import LoginPage from './LoginPage';

const Routing = () => (
  <main>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/players" component={PlayersPage} />
      <Route exact path="/login" component={LoginPage} />
    </Switch>
  </main>
);

export default Routing;
