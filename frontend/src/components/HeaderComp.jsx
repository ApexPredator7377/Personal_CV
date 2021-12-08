import React, { Component } from "react";
import { Paper } from "@mui/material";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class HeaderComp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Paper elevation={3}>
        <header margin={20}>
          <nav className=" navbar-expand-md navbar-dark bg-warning navbar-right px-3 ">
            <h1 className="navbar-brand">Nathan Morgenrood - Curriculum Vitae</h1>
          </nav>
          <Navbar
            className="navbar-right"
            bg="dark"
          >
            <Link Nav className="navbar-right px-3">
              <Link to="/"> About</Link>
            </Link>
            <Nav className="navbar-right px-3 ">
              <Link to="/Portfolio"> Portfolio</Link>
            </Nav>
            <Nav className="navbar-right px-3 ms-auto ">
              <Link to="/Contact_Me"> Contact Me</Link>
            </Nav>
            <Nav className="navbar-right px-3 ">
              <Link to="/Admin"> _</Link>
            </Nav>
          </Navbar>
        </header>
      </Paper>
    );
  }
}