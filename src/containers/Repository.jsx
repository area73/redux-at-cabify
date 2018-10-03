import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import fetchRepository from "../actions/fetchRepository";
import getRepository from "../selectors/getRepository";

class Repository extends Component {
  componentDidMount() {
    const {
      repository,
      actions: { fetchRepository }
    } = this.props;

    fetchRepository(repository.name);
  }

  render() {
    const { repository } = this.props;
    if (repository && repository.subscribers_count) {
      return (
        <div>
          <p> Subscribers: {repository.subscribers_count} </p>
        </div>
      );
    } else {
      return <div> Loading </div>;
    }
  }
}

const mapStateToProps = (state, { repositoryId }) => ({
  repository: getRepository(state, { id: repositoryId })
});
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ fetchRepository }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Repository);
