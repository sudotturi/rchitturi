import React, { Component } from "react";
import "./main.css";
import Sidebar from "../sidenavbar/Sidebar";
import Header from "../header";

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Sidebar />
      </div>
    );
  }
}
export default Main;
