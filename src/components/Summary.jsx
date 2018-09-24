import React, { Component } from "react";
import asCounterContainer from "../containers/asCounterContainer";

class Counter extends Component {
  render() {
    return (
      <div className="summary counter">
        <span> {this.props.counter}</span>
        <button onClick={this.props.actions.increase}> Increase </button>
      </div>
    );
  }
}

export default asCounterContainer(Counter);
