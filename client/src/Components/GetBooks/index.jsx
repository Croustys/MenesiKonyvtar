import React, { Component } from "react";
import axios from "axios";
import Card from "./Card/Card";

import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, FormControl, Button } from "react-bootstrap";

import { BoxLoading } from "react-loadingg";

export default class getBooks extends Component {
  state = {
    stateData: [],
    searchWord: "",
    basedSearch: 1,
  };
  componentDidMount() {
    this.getData();
  }
  async getData() {
    //DB fetch
    try {
      const res = await axios.get("/api/v1/books");
      const data = await res.data;

      this.setState({ stateData: data });
    } catch (e) {
      console.log(`Error: ${e}`);
    }
    //console.log(this.state.stateData); //Fetch testing line for dev
  }

  handleClick(num) {
    const buttons = document.querySelectorAll(".btn-chosen");

    buttons.forEach((button) => {
      button.classList.remove("btn-chosen");
      button.className = "btn-sw btn btn-primary";
    });

    const buttonToChange = document.getElementById(num);

    buttonToChange.className = "btn-chosen btn primary";

    this.setState({ basedSearch: num });
  }

  render() {
    //Dynamic filter

    const filteredData = this.state.stateData.filter((book) => {
      //variables for easier read & efficiency
      const searchBase = this.state.basedSearch;
      const searchWord = this.state.searchWord.toLowerCase();

      if (searchBase === 1)
        return book.Name ? book.Name.toLowerCase().includes(searchWord) : false;
      else if (searchBase === 2) {
        return book.Writer
          ? book.Writer.toLowerCase().includes(searchWord)
          : false;
      } else
        return book.Publisher
          ? book.Publisher.toLowerCase().includes(searchWord)
          : false;
    });

    if (this.state.stateData.length === 0) return <BoxLoading />;

    return (
      <>
        <h1 className="header">Books</h1>
        <h1 className="search">Search based on:</h1>

        <div className="buttonContainer">
          <Button className="btn-sw" onClick={() => this.handleClick(1)} id="1">
            Names
          </Button>
          <Button className="btn-sw" onClick={() => this.handleClick(2)} id="2">
            Writer
          </Button>
          <Button className="btn-sw" onClick={() => this.handleClick(3)} id="3">
            Publisher
          </Button>
        </div>
        <Form className="center">
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            onChange={(e) => this.setState({ searchWord: e.target.value })}
          />
        </Form>
        <div className="wrapper">
          {filteredData.map((item, key) => (
            <Card {...item} key={key} />
          ))}
        </div>
      </>
    );
  }
}
