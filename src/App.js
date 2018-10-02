import React, { Component } from "react";
import "./App.css";
import Repositories from "./containers/Repositories";

class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
  }

  increase = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <div className="App">
        <Repositories />
      </div>
    );
  }
}

export default App;
