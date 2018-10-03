import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import RepositoryListItem from "../components/RepositoryListItem";
import { repositories } from "../remoteEntities";

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
    const { repositories, queryStatus } = this.props;
    if (repositories && repositories.length > 0) {
      return (
        <div>
          <ul> {this.renderRepositories()} </ul>
          <button onClick={this.handleNextPageClick}>
            {queryStatus ? "Loading" : "Fetch next page"}
          </button>
        </div>
      );
    } else {
      return <p>No repositories yet</p>;
    }
  }
}

const mapStateToProps = (state) => {
  console.log(repositories.selectors.getOrderedEntities(state));
  return {
    repositories: repositories.selectors.getOrderedEntities(state),
    queryStatus: repositories.selectors.getRequest(state)
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      fetchRepositories: repositories.actions.runQuery,
      fetchRepositoriesNextPage: repositories.actions.fetchNextPage
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepositoryList);
