import React, { Component } from "react";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav } from "react-bootstrap";

import Routes from "./Routes";

import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App container">
        <Navbar fluid collapseOnSelect bg="light" expand="lg">
          <Navbar.Brand>
            <Link to="/">Scratch</Link>
          </Navbar.Brand>
          <Navbar.Toggle />

          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <LinkContainer to="/signup">
                <Nav.Item>
                  <Nav.Link>Sign Up</Nav.Link>
                </Nav.Item>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Item>
                  <Nav.Link>LogIn</Nav.Link>
                </Nav.Item>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes />
      </div>
    );
  }
}

export default App;
