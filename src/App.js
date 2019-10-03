import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import { AuthProvider } from "./contexts/AuthContext";
import { ItemsProvider } from "./contexts/ItemsContext";

class App extends React.Component {
  state = {
    user: { name: "Min", email: "min@ironhack.com" },
    items: ["apple", "orange", "pear", "watermelon"]
  };

  setUser = user => {
    this.setState(user);
    console.log("Called");
  };

  render() {
    return (
      <div className="App">
        <ItemsProvider value={{ items: this.state.items }}>
          <AuthProvider
            value={{ user: this.state.user, setUser: this.setUser }}
          >
            <Switch>
              <Route path="/" component={Home} />
            </Switch>
          </AuthProvider>
        </ItemsProvider>
      </div>
    );
  }
}

export default App;
