import React, { Component } from "react";

export default class Counter extends Component {
  render() {
    return (
      <div className="summary counter">
        <span> {this.props.counter}</span>
        <button onClick={this.props.increase}> Increase </button>
      </div>
    );
  }
}
