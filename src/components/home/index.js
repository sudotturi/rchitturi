import React, { Component } from "react";
import "./home.css";
import Sidebar from "../sidenavbar/Sidebar";
import Header from "../header";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Sidebar />
      </div>
    );
  }
}

export default Home;
