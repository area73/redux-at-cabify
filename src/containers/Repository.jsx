import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { repositories } from "../remoteEntities";

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
  actions: bindActionCreators({ repositories.actions.fetchEntity }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Repository);
