import React from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import HomePage from './HomePage';
import TestPage from './TestPage';

const Routing = () => (
  <main>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/test" component={TestPage}/>
    </Switch>
  </main>
);

export default Routing;
