import React, { Component } from "react";
import axios from "axios";
import "../css/items.css";

export default class Items extends Component {
  constructor(props) {
    super(props);
    this.items = this.props.entries;
    this.createTasks = this.createTasks.bind(this);
    this.sendit = this.sendit.bind(this);
  }

  createTasks(item) {
    return (
      <li onClick={() => this.delete(item.key)} key={item.key}>
        input: {item.value} || output: {item.output}
      </li>
    );
  }

  delete(key) {
    this.props.delete(key);
  }

  sendit(e) {
    e.preventDefault();
    alert("HI");
    axios({
      method: "get",
      host: "localhost",
      port: 8080
    }).then(() => {
      console.log(listItems);
    });
  }

  render() {
    let listEntries = this.props.entries;
    var listItems = this.props.entries.map(this.createTasks);

    return (
      <ul className="theList">
        {listItems}
        <button onClick={this.sendit}>SENDIT</button>
      </ul>
    );
  }
}
