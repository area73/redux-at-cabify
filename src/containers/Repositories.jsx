import React, { Component } from "react";
import { bindActionCreators } from "redux";
import fetchRepositories from "../actions/fetchRepositories";
import { connect } from "react-redux";
import getOrderedRepositories from "../selectors/getOrderedRepositories";
import RepositoryListItem from "../components/RepositoryListItem";
import fetchRepositoriesNextPage from "../actions/fetchRepositoriesNextPage";

class RepositoryList extends Component {
  componentDidMount() {
    this.props.actions.fetchRepositories();
  }

  renderRepositories() {
    return this.props.repositories.map((repository) => (
      <RepositoryListItem repository={repository} key={repository.name} />
    ));
  }

  handleNextPageClick = () => {
    this.props.actions.fetchRepositoriesNextPage();
  };

  render() {
    const { repositories } = this.props;
    if (repositories && repositories.length > 0) {
      return (
        <div>
          <ul> {this.renderRepositories()} </ul>
          <button onClick={this.handleNextPageClick}> Fetch next page </button>
        </div>
      );
    } else {
      return <p>No repositories yet</p>;
    }
  }
}

const mapStateToProps = (state) => ({
  repositories: getOrderedRepositories(state)
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    { fetchRepositories, fetchRepositoriesNextPage },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepositoryList);
