import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ping from "../actions/ping";
import getPing from "../selectors/getPing";

class Pinger extends Component {
  handleClick = () => {
    this.props.actions.ping();
  };

  render() {
    return (
      <div>
        <p>Is pinging: {this.props.pinging ? "true" : "false"}</p>
        <button onClick={this.handleClick}> Ping </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ pinging: getPing(state) });
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ping }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pinger);
