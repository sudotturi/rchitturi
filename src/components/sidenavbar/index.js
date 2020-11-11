import React from "react";
import { Sidenav, Sidebar, Nav, Navbar, Dropdown, Icon } from "rsuite";
import "./sidebar.css";
import { properties } from "../../utils/properties";
import "rsuite/dist/styles/rsuite-default.css";
import logo from "../../resources/images/chitturilogo.PNG";

const headerStyles = {
  padding: 9,
  height: 56,
  whiteSpace: "nowrap",
  overflow: "hidden"
};

const iconStyles = {
  width: 56,
  height: 56,
  lineHeight: "56px",
  textAlign: "center"
};

const NavToggle = ({ expand, onChange }) => {
  return (
    <div className="btm">
      <Navbar className="nav-toggle">
        <Navbar.Body>
          <Nav>
            <Dropdown
              placement="topStart"
              trigger="click"
              renderTitle={(children) => {
                return <Icon style={iconStyles} icon="cog" />;
              }}
            >
              <Dropdown.Item>Help</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
          </Nav>

          <Nav pullRight>
            <Nav.Item
              onClick={onChange}
              style={{ width: 56, textAlign: "center" }}
            >
              <Icon icon={expand ? "angle-left" : "angle-right"} />
            </Nav.Item>
          </Nav>
        </Navbar.Body>
      </Navbar>
    </div>
  );
};

class Sidebarnav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: false,
      isDesktop: window.innerHeight > 1450
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.updatePredicate = this.updatePredicate.bind(this);
  }
  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth > 760 });
  }
  handleToggle() {
    this.setState({
      expand: !this.state.expand
    });
  }
  render() {
    const isDesktop = this.state.isDesktop;
    const { expand } = this.state;
    return (
      <div
        className="sidebar-page"
        style={{ display: isDesktop ? "block" : "none" }}
      >
        <Sidenav.Header>
          <div style={headerStyles}>
            <img className="logoimg" src={logo} alt="chitturi.ml" />
            <span
              className="logopro"
              style={{
                marginLeft: 12,
                display: expand ? "inline-block" : "none"
              }}
            >
              <b>
                <b className="C">{properties.projectsplitone}</b>
                <b className="HITTU">{properties.projectsplittwo}</b>
                <b className="RI">{properties.projectsplitthree}</b>
              </b>
            </span>
          </div>
        </Sidenav.Header>
        <Sidebar
          style={{ display: "flex", flexDirection: "column" }}
          width={expand ? 180 : 56}
          collapsible
          className="border-solid side bg-con"
        >
          <Sidenav
            expanded={expand}
            className={expand ? "" : "border-solid"}
            // defaultOpenKeys={["3"]}
            // appearance="subtle"
          >
            <Sidenav.Body>
              <Nav>
                <Nav.Item eventKey="1" active icon={<Icon icon="dashboard" />}>
                  Dashboard
                </Nav.Item>
                <Nav.Item eventKey="2" icon={<Icon icon="group" />}>
                  User Group
                </Nav.Item>
                <Dropdown
                  eventKey="3"
                  trigger="hover"
                  title="Advanced"
                  icon={<Icon icon="magic" />}
                  placement="rightStart"
                >
                  <Dropdown.Item eventKey="3-1">Geo</Dropdown.Item>
                  <Dropdown.Item eventKey="3-2">Devices</Dropdown.Item>
                  <Dropdown.Item eventKey="3-3">Brand</Dropdown.Item>
                  <Dropdown.Item eventKey="3-4">Loyalty</Dropdown.Item>
                  <Dropdown.Item eventKey="3-5">Visit Depth</Dropdown.Item>
                </Dropdown>
                <Dropdown
                  eventKey="4"
                  trigger="hover"
                  title="Settings"
                  icon={<Icon icon="gear-circle" />}
                  placement="rightStart"
                >
                  <Dropdown.Item eventKey="4-1">Applications</Dropdown.Item>
                  <Dropdown.Item eventKey="4-2">Websites</Dropdown.Item>
                  <Dropdown.Item eventKey="4-3">Channels</Dropdown.Item>
                  <Dropdown.Item eventKey="4-4">Tags</Dropdown.Item>
                  <Dropdown.Item eventKey="4-5">Versions</Dropdown.Item>
                </Dropdown>
              </Nav>
            </Sidenav.Body>
          </Sidenav>
          <NavToggle expand={expand} onChange={this.handleToggle} />
        </Sidebar>
      </div>
    );
  }
}
export default Sidebarnav;
