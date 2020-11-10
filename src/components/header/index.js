import React, { Component } from "react";
import "./header.css";
import { properties } from "../../utils/properties";
import { Button, Card, Form, Nav, Navbar } from "react-bootstrap";
import history from "../../utils/history";
import { Header } from "rsuite";
class Headerbar extends Component {
  render() {
    return (
      <Header>
        <Card className="header">
          <div id="logo">
            <b id="C">{properties.projectsplitone}</b>
            <b id="HITTU">{properties.projectsplittwo}</b>
            <b id="RI">{properties.projectsplitthree}</b>
          </div>
        </Card>
      </Header>
    );
  }
}

export default Headerbar;
