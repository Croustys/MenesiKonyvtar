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
    //basic fetch of the DB
    try {
      const res = await axios.get("http://localhost:5000/api/v1/books");
      const data = await res.data;

      this.setState({ stateData: data });
    } catch (e) {
      console.log(`Error: ${e}`);
    }
    //console.log(this.state.stateData); //Fetch testing line for dev
  }

  handleClick(num) {
    const buttons = document.querySelectorAll(".btn-chosen");

    //rlly bad way to change classnames but w/e
    buttons.forEach((button) => {
      button.classList.remove("btn-chosen");
      button.className = "btn-sw btn btn-primary";
    });

    const buttonToChange = document.getElementById(num);

    buttonToChange.className = "btn-chosen btn primary";

    this.setState({ basedSearch: num });
  }

  render() {
    //Filters upon entering anything into search bar and re-renders

    const filteredData = this.state.stateData.filter((book) => {
      const searchBase = this.state.basedSearch;
      if (searchBase === 1)
        return book.Name ? book.Name.toLowerCase().includes(this.state.searchWord.toLowerCase()) : false;
      else if (searchBase === 2) {
        return book.Writer
          ? book.Writer.toLowerCase().includes(this.state.searchWord.toLowerCase())
          : false;
      } else
        return book.Publisher
          ? book.Publisher.toLowerCase().includes(this.state.searchWord.toLowerCase())
          : false;
    });

    /* const filteredData = this.state.stateData.filter((book) => {
      return Object.keys(book).some((i) => {
        return book[i].toLowerCase().includes(this.state.searchWord)
        //return book[i].includes(this.state.searchWord);
      });
    });
    //console.log(filteredData); */

    if (this.state.stateData.length === 0) return <BoxLoading />;

    return (
      <>
        <h1 className="header">Books</h1>
        <h1>Search based on:</h1>

        <Button className="btn-sw" onClick={() => this.handleClick(1)} id="1">
          Names
        </Button>
        <Button className="btn-sw" onClick={() => this.handleClick(2)} id="2">
          Writer
        </Button>
        <Button className="btn-sw" onClick={() => this.handleClick(3)} id="3">
          Publisher
        </Button>
        <Form>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            onChange={(e) => this.setState({ searchWord: e.target.value })}
          />
        </Form>
        <div className="wrapper">
          {filteredData.map((item, key) => (
            <Card
              key={key}
              Publisher={item.Publisher}
              Name={item.Name}
              Writer={item.Writer}
            />
          ))}
        </div>
      </>
    );
  }
}
