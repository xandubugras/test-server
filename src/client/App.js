import React, { Component } from "react";
import "./css/App.css";
import User from "./components/User.jsx";
import TestList from "./components/list.jsx";

export default class App extends Component {
  render() {
    return (
      <div>
        <TestList />
      </div>
    );
  }
}
