import React, { Component } from "react";
import AuthContext from "../../contexts/AuthContext";

export default class UserInfoClassSingleContext extends Component {
  static contextType = AuthContext;

  render() {
    const { user, setUser } = this.context;
    const newUser = {
      user: { name: "Bruno", email: "bruno@ironhack.com" }
    };
    return (
      <div>
        {user.username}
        <button onClick={() => setUser(newUser)}>set user</button>
      </div>
    );
  }
}
