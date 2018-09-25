import React, { Component } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Summary from "./components/Summary";
import Pinger from "./containers/Pinger";
import ComplexContainer from "./containers/ComplexContainer";

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
        <Pinger />
        <Summary />
        <ComplexContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
