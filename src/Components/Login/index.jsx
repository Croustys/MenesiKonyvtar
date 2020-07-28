import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

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
  handleLogin() {
    const { username, pw } = this.state;
    if (username === "a" && pw === "b") this.props.handleLogin(true);

    this.toggle();
  }
  render() {
    return (
      <div>
        <Button color="primary" onClick={() => this.toggle()}>
          Login
        </Button>
        <Modal isOpen={this.state.modal} toggle={() => this.toggle()}>
          <ModalHeader toggle={() => this.toggle()}>Login</ModalHeader>
          <ModalBody>Seems like you're not logged in!</ModalBody>
          <ModalBody>Username</ModalBody>
          <input
            type="text"
            onChange={(t) => this.setState({ username: t.target.value })}
          />
          <ModalBody>Password</ModalBody>
          <input
            type="text"
            onChange={(t) => this.setState({ pw: t.target.value })}
          />
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
