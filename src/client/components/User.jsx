import React, { Component } from "react";
import axios from "axios";
import "../css/App.css";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: ""
      }
    };
    this.fetchUsers = this.fetchUsers.bind(this);
  }

  fetchUsers() {
    axios
      .get("/users")
      .then(response => {
        console.log(response);
        this.setState({
          user: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentWillMount() {
    this.fetchUsers();
  }

  render() {
    return (
      <div className="user">
        <h1>Hello {this.state.user.name}</h1>
      </div>
    );
  }
}

export default User;
