import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "./utils/Routes";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <div className="App">
      <Routes />
    </div>
  </Router>,
  rootElement
);
