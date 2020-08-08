import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import axios from "axios";
import "./login.css";

const port = process.env.PORT || "http://localhost:5001/api/v1/users/login"

export default class Login extends Component {
  state = {
    username: "",
    pw: "",
    modal: false,
  };
  toggle() {
    const { modal } = this.state;
    this.setState({ modal: !modal });
  }
  async handleLogin() {
    const { username, pw } = this.state;
    try {
      const res = await axios.get(port);

      for (const user of res.data) {
        if (user.name === username && user.password === pw) {
          this.props.handleLogin(true);

          //this.toggle();
        }
      }
    } catch (e) {
      console.log(`error$ ${e}`);
    }
  }
  render() {
    return (
      <div>
        <Button
          className="Login-button"
          color="primary"
          onClick={() => this.toggle()}
        >
          Login
        </Button>
        <Modal isOpen={this.state.modal} toggle={() => this.toggle()}>
          <ModalHeader toggle={() => this.toggle()}>Login</ModalHeader>
          <ModalBody>Seems like you're not logged in!</ModalBody>
          <ModalBody>Username</ModalBody>
          <form>
            <input
              type="text"
              autoComplete="current-password"
              onChange={(t) => this.setState({ username: t.target.value })}
            />
            <ModalBody>Password</ModalBody>
            <input
              type="password"
              autoComplete="current-password"
              onChange={(t) => this.setState({ pw: t.target.value })}
            />
          </form>
          <ModalFooter>
            <Button color="primary" onClick={() => this.handleLogin()}>
              Login
            </Button>
            <Button color="secondary" onClick={() => this.toggle()}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
