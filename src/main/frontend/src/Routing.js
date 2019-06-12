import React from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import HomePage from './HomePage';


const Routing = () => (
  <main>
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
  </main>
);

export default Routing;
