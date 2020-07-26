import React, { Component } from "react";
import './CardStyle.css'

export default class Card extends Component {
  state = {
    Publisher: "",
    Name: "",
    Writer: "",
  };
  componentDidMount() {
    const { Publisher, Name, Writer } = this.props;

    this.setState({ Publisher: Publisher, Name: Name, Writer: Writer });
  }
  render() {
    return (
      <div className="card">
        <h1 className="card-text">{this.state.Publisher}</h1>
        <h1 className="card-text">{this.state.Name}</h1>
        <h1 className="card-text">{this.state.Writer}</h1>
      </div>  
    );
  }
}
