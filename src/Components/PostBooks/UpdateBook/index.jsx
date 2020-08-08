import React, { Component } from "react";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";

import { BoxLoading } from "react-loadingg";

const port = process.env.PORT || 'http://localhost:5001/api/v1/books'

export default class UpdateBook extends Component {
  state = {
    _id: null,
    Publisher: "",
    Writer: "",
    Name: "",
    Amount: null,
    Price: null,
    Value: null,
    rendering: false,
  };

  async handleSubmit() {
    const { _id, Publisher, Writer, Name, Amount, Price, Value } = this.state;

    //loading animation
    this.setState({ rendering: true });

    try {
      const res = await axios.put(`${port}/${_id}`, {
        _id,
        Publisher,
        Writer,
        Name,
        Amount,
        Price,
        Value,
      });

      if (res.status === 200) {
        alert(`Update was successfull`);
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
  render() {
    if (this.state.rendering) return <BoxLoading />;
    return (
      <Form>
        <Form.Group controlId="Large text">
          <Form.Label>Book's Id</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the Book's Id"
            onChange={(text) => this.setState({ _id: text.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="Large text">
          <Form.Label>Book's Publisher</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the Book's Publisher"
            onChange={(text) => this.setState({ Publisher: text.target.value })}
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
    );
  }
}
