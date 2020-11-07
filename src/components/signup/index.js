import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const eye = <FontAwesomeIcon icon={faEye} />;
const eyeSlash = <FontAwesomeIcon icon={faEyeSlash} />;
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRevealPass: false,
      isRevealCPass: false
    };
  }
  render() {
    const { isRevealPass, isRevealCPass } = this.state;
    var togglePassword = (event) => {
      this.setState({ isRevealPass: !isRevealPass });
    };
    var toggleCPassword = (event) => {
      this.setState({ isRevealCPass: !isRevealCPass });
    };
    return (
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
            <Form method="POST">
              <div className="container">
                <h3 className="signin">Create Account</h3>
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
                    />
                    <i onClick={togglePassword} class="pash">
                      {isRevealPass ? eye : eyeSlash}
                    </i>
                  </Form.Group>
                </div>
                <div className="pass-wrapper">
                  <Form.Group controlId="formBasicCPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type={isRevealCPass ? "text" : "password"}
                      placeholder="Password"
                      required
                    />
                    <i onClick={toggleCPassword} className="pash">
                      {isRevealCPass ? eye : eyeSlash}
                    </i>
                  </Form.Group>
                </div>
                <hr></hr>
                <p>
                  By creating an account you agree to our{" "}
                  <a href="home">Terms &amp; Privacy</a>.
                </p>
                <Button variant="primary" type="submit" id="loginButton">
                  Sign Up
                </Button>
                <div className="container signin">
                  <p>
                    Already have an account? <a href="login">Sign in</a>.
                  </p>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
