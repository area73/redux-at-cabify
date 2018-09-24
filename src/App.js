import React, { Component } from "react";

import "./App.css";
import Counter from "./components/Counter";
import Footer from "./components/Footer";
import Summary from "./components/Summary";
import OtherThing from "./components/OtherThing";

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
        <OtherThing />
      </div>
    );
  }
}

export default App;
