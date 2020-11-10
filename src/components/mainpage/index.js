import React, { Component } from "react";
import "./main.css";
import Sidebarnav from "../sidenavbar/index";
import Headerbar from "../header";
import Routes from "../../utils/Routes";
import { Container, Header } from "rsuite";
class Main extends Component {
  render() {
    return (
      <Container class="main">
        <Sidebarnav />
        <Container>
          <Header>
            <Headerbar />
          </Header>
          <Container className="scr">
            <Routes />
          </Container>
        </Container>
      </Container>
    );
  }
}
export default Main;
