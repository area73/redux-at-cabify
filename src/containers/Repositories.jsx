import React, { Component } from "react";
import { bindActionCreators } from "redux";
import fetchRepositories from "../actions/fetchRepositories";
import { connect } from "react-redux";
import getRepositories from "../selectors/getRepositories";
import RepositoryListItem from "../components/RepositoryListItem";

class RepositoryList extends Component {
  componentDidMount() {
    this.props.actions.fetchRepositories();
  }

  renderRepositories() {
    return this.props.repositories.map((repository) => (
      <RepositoryListItem
        repositoryName={repository.name}
        key={repository.name}
      />
    ));
  }

  render() {
    const { repositories } = this.props;
    if (repositories && repositories.length > 0) {
      return <ul> {this.renderRepositories()} </ul>;
    } else {
      return <p>No repositories yet</p>;
    }
  }
}

const mapStateToProps = (state) => ({
  repositories: getRepositories(state)
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ fetchRepositories }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepositoryList);
