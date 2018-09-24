import React, { Component } from "react";
import asCounterContainer from "../containers/asCounterContainer";

class Counter extends Component {
  handleClick = () => {
    this.props.actions.increase();
  };

  render() {
    return (
      <div className="counter">
        <span> {this.props.counter}</span>
        <button onClick={this.handleClick}> Increase </button>
      </div>
    );
  }
}

export default asCounterContainer(Counter);
