import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css'

import { Navbar, Nav } from 'react-bootstrap';
import { Home, Books, Post, Update, Delete } from './Components'

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
            <Route path="/books/update" exact component={Update} />
            <Route path="/books/delete" exact component={Delete} />
          </Switch>
    </Router>
    );
  }
}
