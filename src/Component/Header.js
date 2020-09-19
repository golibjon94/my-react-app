import React, { Component } from "react";
import {
  Navbar,
  Nav,
  FormControl,
  Container,
  Form,
  Button,
} from "react-bootstrap";
import logo from "./logo192.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Contacts from "../Pages/Contacts";
import Blog from "../Pages/Blog";
import Mysitebar from "../Mysitebar";
import styled from "styled-components";

const Styles = styled.div`
  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #adb1b8;
    &:hover {
      color: white;
    }
  }
`;
export default class Header extends Component {
  render() {
    return (
      <>
        <Styles>
          <Navbar
            collapseOnSelect
            expand="sm"
            bg="light"
            variant="light"
            fixed="top"
          >
            <Container>
              <Navbar.Brand href="/">
                <img
                  src={logo}
                  height="30"
                  width="30"
                  className="d-inline-block align-top"
                  alt="Logo"
                />{" "}
                React Site
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/about">About us</Nav.Link>
                  <Nav.Link href="/contacts">Contacts</Nav.Link>
                  <Nav.Link href="/blog">Blog</Nav.Link>
                  <Nav.Link href="/mysitebar">Mysitebar</Nav.Link>
                </Nav>
                <Form inline>
                  <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                  />
                  <Button variant="outline-info">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Router>
            <Switch fixed="top">
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contacts" component={Contacts} />
              <Route path="/blog" component={Blog} />
              <Route path="/mysitebar" component={Mysitebar} />
            </Switch>
          </Router>
        </Styles>
      </>
    );
  }
}
