import React, { Component } from "react";
import "./header.css";
import { properties } from "../../utils/properties";
import { Button, Form, Nav, Navbar } from "react-bootstrap";
import history from "../../utils/history";
class Header extends Component {
  render() {
    return (
      <div>
        <Navbar bg="white" className="header" expand="lg">
          <Navbar.Brand href="#home">
            <b id="logo">{properties.project}</b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="responsive-navbar-nav justify-content-between">
            <Nav className="mr-auto"></Nav>
            <Form className="lsbtn">
              <Button
                variant="outline-success"
                onClick={() => history.push("/login")}
              >
                <b>Log in</b>
              </Button>{" "}
              <Button variant="success" onClick={() => history.push("/signup")}>
                <b>Sign Up</b>
              </Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;