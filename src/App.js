import React, { Component } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
        <Footer />
      </div>
    );
  }
}

export default App;
