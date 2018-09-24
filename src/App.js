import React, { Component } from "react";

import "./App.css";
import Counter from "./components/Counter";
import Footer from "./components/Footer";
import Summary from "./components/Summary";

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
        <Counter />
        <Summary />
        <Footer />
      </div>
    );
  }
}

export default App;
