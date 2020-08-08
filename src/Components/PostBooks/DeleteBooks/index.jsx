import React, { Component } from "react";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";

import { BoxLoading } from "react-loadingg";

export default class DeleteBook extends Component {
  state = {
    _id: null,
    rendering: false,
  };

  async handleSubmit() {
    const { _id } = this.state;

    //loading animation
    this.setState({ rendering: true });

    try {
      const res = await axios.delete(
        `http://localhost:5000/api/v1/books/${_id}`,
        {}
      );

      if (res.status === 200) {
        //alert(`Delete operation was successfull`);
        this.setState({
          _id: null,
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
