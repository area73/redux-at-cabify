import React, { Component } from "react";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import { repositories } from "../remoteEntities";

class Repository extends Component {
  componentDidMount() {}

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

const mapStateToProps = (state, { repositoryId }) => ({});

export default connect(mapStateToProps)(Repository);
