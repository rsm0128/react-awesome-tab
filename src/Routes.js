import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";

const Routes = () => (
  <Switch>
    <Route path="/" exact={true} component={Home} />
    <Route path="/about" component={About} />
    <Route path="/features" component={Features} />
  </Switch>
);

export default Routes;
