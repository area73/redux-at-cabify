import React, { Component } from "react";

export default class Counter extends Component {
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
      <div className="counter">
        <span> {this.state.counter}</span>
        <button onClick={this.increase}> Increase </button>
      </div>
    );
  }
}
