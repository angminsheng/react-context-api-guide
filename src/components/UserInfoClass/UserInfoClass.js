import React, { Component } from "react";
import { AuthConsumer } from "../../contexts/AuthContext";
import { ItemsConsumer } from "../../contexts/ItemsContext";

//this is for the case of multiple context for class component. The only way to get all the context is to wrap the context.consumer around one another.

// If you only need one context for a class component, there is an easier way to consume the context.

// For single context class component refer to the UserInfoClassSingleContext component.

export default class UserInfo extends Component {
  render() {
    const newUser = {
      user: { name: "Montasar", email: "montasar@ironhack.com" }
    };
    return (
      <div
        style={{ border: "1px solid black", padding: "20px", margin: "20px" }}
      >
        <h1>Class component</h1>
        <AuthConsumer>
          {({ user, setUser }) => (
            <ItemsConsumer>
              {({ items }) => (
                <div>
                  {console.log(setUser)}
                  <h2>{user.name}</h2>
                  {items.map(item => (
                    <p key={item}>{item}</p>
                  ))}
                  <button onClick={() => setUser(newUser)}>update</button>
                </div>
              )}
            </ItemsConsumer>
          )}
        </AuthConsumer>
      </div>
    );
  }
}
