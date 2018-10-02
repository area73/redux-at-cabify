import React, { Component } from "react";
import Repository from "../containers/Repository";

export default class RepositoryListItem extends Component {
  constructor() {
    super();
    this.state = { open: false };
  }

  handleClick = () => {
    console.log("handling click");
    this.setState({ open: !this.state.open });
  };

  renderDetail() {
    return <Repository repositoryName={this.props.repositoryName} />;
  }

  render() {
    const { repositoryName } = this.props;
    return (
      <li key={repositoryName} onClick={this.handleClick}>
        {repositoryName}
        {!!this.state.open && this.renderDetail()}
      </li>
    );
  }
}
