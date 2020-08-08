import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";

import { BoxLoading } from "react-loadingg";

import Login from "../Login";

export default class PostBooks extends Component {
  state = {
    _id: null,
    Publisher: "",
    Writer: "",
    Name: "",
    Amount: null,
    Price: null,
    Value: null,
    rendering: false,
    loggedIn: false, //change back to false for production
    updateRedirect: false,
    redirectTo: "",
  };

  async handleSubmit() {
    //loading animation
    this.setState({ rendering: true });

    try {
      const idRes = await axios.get(`api/v1/ids`);

      const length = idRes.data.length - 1;
      const mostRecentId = idRes.data[length].id;
      const id = mostRecentId + 1;

      await axios.post(`api/v1/ids/add/${id}`, {
        id,
      });
      this.setState({ _id: id });
    } catch (error) {
      console.log(`Error: ${error}`);
    }
    try {
      const { _id, Publisher, Writer, Name, Amount, Price, Value } = this.state;

      const res = await axios.post(`api/v1/books/add`, {
        _id,
        Publisher,
        Writer,
        Name,
        Amount,
        Price,
        Value,
      });

      if (res.status === 200) {
        this.setState({
          Publisher: "",
          Writer: "",
          Name: "",
          Amount: null,
          Price: null,
          Value: null,
          rendering: false,
        });
      }
    } catch (e) {
      console.log(`Error: ${e}`);
    }
  }

  handleLogin(isLoggedIn) {
    if (isLoggedIn) {
      this.setState({ loggedIn: true });
      sessionStorage.setItem('loggedIn', true)
    }
  }

  handleUpdateRedirect(path) {
    this.setState({
      updateRedirect: !this.state.updateRedirect,
      redirectTo: path,
    });
  }

  render() {
    if (this.state.rendering) return <BoxLoading />;

    if (!this.state.loggedIn && !sessionStorage.getItem('loggedIn'))
      return <Login handleLogin={(x) => this.handleLogin(x)} />;

    if (this.state.updateRedirect)
      return <Redirect to={`/books${this.state.redirectTo}`} />;

    return (
      <>
        <Form>
          <Form.Group controlId="Large text">
            <Form.Label>Book's Publisher</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the Book's Publisher"
              onChange={(text) =>
                this.setState({ Publisher: text.target.value })
              }
            />
          </Form.Group>
          <Form.Group controlId="Large text">
            <Form.Label>Book's Writer</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the Book's Writer"
              onChange={(text) => this.setState({ Writer: text.target.value })}
            />
          </Form.Group>
          <Form.Group controlId="Large text">
            <Form.Label>Book's Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the Book's Name"
              onChange={(text) => this.setState({ Name: text.target.value })}
            />
          </Form.Group>
          <Form.Group controlId="Large text">
            <Form.Label>Book Amount</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter the Amount of Books"
              onChange={(text) => this.setState({ Amount: text.target.value })}
            />
          </Form.Group>
          <Form.Group controlId="Large text">
            <Form.Label>Book's Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter the Book's Price"
              onChange={(text) => this.setState({ Price: text.target.value })}
            />
          </Form.Group>
          <Form.Group controlId="Large text">
            <Form.Label>Book's Value</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter the Book's Value"
              onChange={(text) => this.setState({ Value: text.target.value })}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="button"
            onClick={() => this.handleSubmit()}
          >
            Submit
          </Button>
        </Form>
        <Button
          variant="primary"
          type="button"
          onClick={() => this.handleUpdateRedirect("/update")}
        >
          Update Books
        </Button>
        <Button
          variant="primary"
          type="button"
          onClick={() => this.handleUpdateRedirect("/delete")}
        >
          Delete Books
        </Button>
      </>
    );
  }
}
