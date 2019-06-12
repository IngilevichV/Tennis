import React from "react";
import { Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import HomePage from './HomePage';
import PlayersPage from './PlayersPage';

const Routing = () => (
  <main>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/players" component={PlayersPage} />
    </Switch>
  </main>
);

export default Routing;
