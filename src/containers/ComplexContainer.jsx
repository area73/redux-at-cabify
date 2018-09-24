import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import setUserName from "../actions/setUserName";
import getCounter from "../selectors/getCounter";
import getUltraComplexSelector from "../selectors/getUltraComplexSelector";

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
    userName: getUltraComplexSelector(state),
    counter: getCounter(state)
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ setUserName }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComplexContainer);
