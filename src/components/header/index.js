import React, { Component } from "react";
import "./header.css";
import { properties } from "../../utils/properties";
import { Card } from "react-bootstrap";
import history from "../../utils/history";
import { Header, Drawer, Icon } from "rsuite";

class Headerbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backdrop: false,
      show: false
    };
    this.close = this.close.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }
  close() {
    this.setState({
      show: false
    });
  }
  toggleDrawer() {
    this.setState({ show: true });
  }

  render() {
    const { show } = this.state;
    return (
      <Header>
        <Card className="header">
          <button className="togglebutton" onClick={this.toggleDrawer}>
            <Icon icon="bars" size="1x" />
          </button>
          <div id="logo" onClick={() => history.push("/")}>
            <b id="C">{properties.projectsplitone}</b>
            <b id="HITTU">{properties.projectsplittwo}</b>
            <b id="RI">{properties.projectsplitthree}</b>
          </div>
        </Card>
        <Drawer
          backdrop="true"
          placement="left"
          show={show}
          size="xs"
          onHide={this.close}
          className="tog"
        >
          <Drawer.Header>
            <Drawer.Title>Drawer Title</Drawer.Title>
          </Drawer.Header>
          <Drawer.Body></Drawer.Body>
        </Drawer>
      </Header>
    );
  }
}

export default Headerbar;
