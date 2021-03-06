import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import axios from "axios";
import "./login.css";

export default class Login extends Component {
  state = {
    username: "",
    pw: "",
    modal: false,
    loginFail: false,
  };
  toggle() {
    const { modal } = this.state;
    this.setState({ modal: !modal });
  }

  async handleLogin() {
    const { username, pw } = this.state;

    try {
      const res = await axios.get("/api/v1/users/login");

      for (const user of res.data) {
        if (user.name === username && user.password === pw) {
          this.props.handleLogin(true);
        }
      }
      this.setState({ loginFail: true });
    } catch (e) {
      console.log(`Error: ${e}`);
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
            { this.state.loginFail ? <ModalBody>ERROR</ModalBody> : null}
            <input
              type="text"
              autoComplete="current-password"
              className="input-center"
              onChange={(t) => this.setState({ username: t.target.value })}
            />
            <ModalBody>Password</ModalBody>
            <input
              type="password"
              className="input-center"
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
