import React from "react";
import { Sidenav, Nav, Dropdown, Icon } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";
const styles = {
  width: "auto",
  display: "inline-table",
  marginRight: 10,
  border: "1px solid"
};

class Sidebar extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: false,
      activeKey: "1"
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleToggle() {
    this.setState({
      expanded: !this.state.expanded
    });
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const { expanded } = this.state;

    return (
      <div>
        <div style={styles}>
          <Sidenav
            appearance="subtle"
            expanded={expanded}
            activeKey={this.state.activeKey}
            onSelect={this.handleSelect}
            defaultOpenKeys={["3", "4"]}
          >
            <Sidenav.Body>
              <Nav>
                <Nav.Item
                  active
                  onClick={this.handleToggle}
                  icon={expanded ? <Icon icon="left" /> : <Icon icon="right" />}
                >
                  {expanded ? "Minimize Menu" : "Expand Menu"}
                </Nav.Item>
                <Nav.Item eventKey="1" active icon={<Icon icon="dashboard" />}>
                  Dashboard
                </Nav.Item>
                <Nav.Item eventKey="3" icon={<Icon icon="group" />}>
                  User Group
                </Nav.Item>
                <Dropdown
                  eventKey="4"
                  title="Advanced"
                  icon={<Icon icon="magic" />}
                >
                  <Dropdown.Item eventKey="4-1">Geo</Dropdown.Item>
                  <Dropdown.Item eventKey="4-2">Devices</Dropdown.Item>
                  <Dropdown.Item eventKey="4-3">Loyalty</Dropdown.Item>
                  <Dropdown.Item eventKey="4-4">Visit Depth</Dropdown.Item>
                </Dropdown>
                <Dropdown
                  eventKey="5"
                  title="Settings"
                  icon={<Icon icon="gear-circle" />}
                >
                  <Dropdown.Item eventKey="5-1">Applications</Dropdown.Item>
                  <Dropdown.Item eventKey="5-2">Channels</Dropdown.Item>
                  <Dropdown.Item eventKey="5-3">Versions</Dropdown.Item>
                  <Dropdown.Menu eventKey="5-5" title="Custom Action">
                    <Dropdown.Item eventKey="5-5-1">Action Name</Dropdown.Item>
                    <Dropdown.Item eventKey="5-5-2">
                      Action Params
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>
            </Sidenav.Body>
          </Sidenav>
        </div>{" "}
      </div>
    );
  }
}

export default Sidebar;
