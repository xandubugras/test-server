import React, { Component } from "react";
import Items from "./items.jsx";
import "../css/items.css";
class TestList extends Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.state = { items: [] };
  }

  addItem(e) {
    if (this._inputElement.value !== "") {
      let newItem = {
        value: this._inputElement.value,
        output: this._inputElementb.value,
        key: Date.now()
      };
      this.setState(prevState => {
        return {
          items: prevState.items.concat(newItem)
        };
      });
    }
    this._inputElement.value = "";
    this._inputElementb.value = "";
    console.log(this.state.items);

    e.preventDefault();
  }

  deleteItem(key) {
    let filtered = this.state.items.filter(item => {
      return item.key !== key;
    });
    this.setState(() => {
      return { items: filtered };
    });
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input
              ref={a => {
                this._inputElement = a;
              }}
              placeholder="enter test"
            />
            <input
              ref={a => {
                this._inputElementb = a;
              }}
              placeholder="enter expected output"
            />
            <button type="submit">add</button>
          </form>
          <Items entries={this.state.items} delete={this.deleteItem} />
        </div>
      </div>
    );
  }
}

export default TestList;
