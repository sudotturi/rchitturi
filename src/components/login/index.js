import React, { Component } from "react";
import "./login.css";
import { Button } from "react-bootstrap";

class Login extends Component {
  render() {
    return (
      <div class="limiter">
        <div class="container-login100">
          <div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
            <form method="POST">
              <div class="container">
                <h3 class="signin">Log In</h3>
                <div class="error-message" id="div">
                  <h5 class="error-message-title">
                    Incorrect username or password
                  </h5>
                  <p class="error-message-description">
                    Check that you have entered the correct username and
                    password and try again.
                  </p>
                </div>
                <input
                  type="text"
                  label="Email"
                  placeholder="Enter Email"
                  style={{ width: "100%" }}
                  id="Email"
                  required
                  name="Email"
                ></input>
                <input
                  label="Password"
                  type="Password"
                  placeholder="Enter password"
                  style={{ width: "100%" }}
                  id="pass"
                  pattern=".{8,}"
                  required
                  name="Password"
                ></input>
                <hr></hr>
                <Button variant="primary">Primary</Button> Log In
              </div>
              <div class="txt1 text-center">
                <button
                  id="forgotPasswordButton"
                  theme="tertiary small forgot-password"
                  on-click="_forgotPassword"
                >
                  Forgot Password
                </button>
              </div>

              <div class="txt1 text-center p-t-5">
                <span> Or Sign In Using </span>
              </div>
              <div class="flex-c-m">
                <a href="home" class="login100-social-item bg1">
                  <i icon="vaadin:facebook"></i>
                </a>
                <a href="home" class="login100-social-item bg2">
                  <i icon="vaadin:twitter"></i>
                </a>
                <a href="home" class="login100-social-item bg3">
                  <i icon="vaadin:google-plus"></i>
                </a>
              </div>
              <div class="container signin">
                <p>
                  Don't have an account? <a href="signup">Sign Up</a>.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
