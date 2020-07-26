import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Nav } from 'react-bootstrap';
import { Home, Books, Post } from './Components'

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="">Menesi Könyvtár</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/books" className="nav-link">Books</Link>
              <Link to="/books/add" className="nav-link">Post Books</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/books" exact component={Books} />
            <Route path="/books/add" exact component={Post} />
          </Switch>
    </Router>
    );
  }
}
