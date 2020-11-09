import React, { Component } from "react";
import "./login.css";
import { InfoCircle } from "react-bootstrap-icons";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import history from "../../utils/history";
import {
  faFacebook,
  faTwitter,
  faGoogle
} from "@fortawesome/free-brands-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const eye = <FontAwesomeIcon icon={faEye} />;
const eyeSlash = <FontAwesomeIcon icon={faEyeSlash} />;
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRevealPass: false,
      passValOne: "",
      passValTwo: ""
    };
  }
  render() {
    const { isRevealPass } = this.state;
    var togglePassword = (event) => {
      this.setState({ isRevealPass: !isRevealPass });
    };
    return (
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
            <Form method="POST">
              <div className="container">
                <h3 className="signin">Log In</h3>
                <div className="error-message" id="div" hidden={"false"}>
                  <h6 className="error-message-title">
                    <InfoCircle color="red" /> Incorrect username or password
                  </h6>
                  <p className="error-message-description">
                    Check that you have entered the correct username and
                    password and try again.
                  </p>
                </div>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    required
                  />
                </Form.Group>
                <div className="pass-wrapper">
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type={isRevealPass ? "text" : "password"}
                      placeholder="Password"
                      required
                    ></Form.Control>
                  </Form.Group>
                  <i onClick={togglePassword} className="pash">
                    {isRevealPass ? eye : eyeSlash}
                  </i>
                </div>
                <hr></hr>
                <Button variant="primary" type="submit" id="loginButton">
                  Log In
                </Button>
              </div>
              <div class="txt1 text-center">
                <Button variant="link">Forgot Password</Button>
              </div>

              <div className="txt1 text-center p-t-5">
                <span> Or Sign In Using </span>
              </div>
              <div className="flex-c-m">
                <Link
                  onClick={() => history.push("/login")}
                  className="login100-social-item bg1"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </Link>
                <Link
                  onClick={() => history.push("/login")}
                  className="login100-social-item bg2"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>
                <Link
                  onClick={() => history.push("/login")}
                  className="login100-social-item bg3"
                >
                  <FontAwesomeIcon icon={faGoogle} />
                </Link>
              </div>
              <div className="container signin">
                <p>
                  Don't have an account?{" "}
                  <Link onClick={() => history.push("/signup")}>Sign Up</Link>.
                </p>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
