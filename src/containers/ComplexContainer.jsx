import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import setUserName from "../actions/setUserName";

class ComplexContainer extends Component {
  handleChange = (e) => {
    this.props.actions.setUserName(e.target.value);
  };

  renderUserName() {
    return <p>My name is {this.props.userName}</p>;
  }

  render() {
    const { userName, counter } = this.props;

    return (
      <div>
        <input onChange={this.handleChange} value={this.props.value} />
        <p>The counter value is {counter}</p>
        {!!userName && this.renderUserName()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userName: state.userName,
    counter: state.counter
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ setUserName }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComplexContainer);
