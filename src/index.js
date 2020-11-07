import React from "react";
import ReactDOM from "react-dom";

import Login from "./components/login/index";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
  rootElement
);
