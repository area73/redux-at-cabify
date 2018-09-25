import React, { Component } from "react";
import "./App.css";
import PokemonList from "./containers/PokemonList";

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
        <PokemonList />
      </div>
    );
  }
}

export default App;
