import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import fetchRepository from "../actions/fetchRepository";
import getRepository from "../selectors/getRepository";

class Repository extends Component {
  componentDidMount() {
    const {
      id,
      actions: { fetchRepository }
    } = this.props;

    fetchRepository(id);
  }

  render() {
    const { repository } = this.props;
    return <div> {repository.name} </div>;
  }
}

const mapStateToProps = (state, { id }) => ({
  repository: getRepository(state, { id })
});
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ fetchRepository }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Repository);
