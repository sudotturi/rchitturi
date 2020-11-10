import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import Login from "../components/login";
import Signup from "../components/signup";
import Home from "../components/home";
import history from "./history";
import Articles from "../components/articles";
export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/home" component={Home} />
          <Route path="/articles" component={Articles} />
        </Switch>
      </Router>
    );
  }
}
