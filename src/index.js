import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import Main from "./components/mainpage";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <div className="App">
      <Main />
    </div>
  </Router>,
  rootElement
);
