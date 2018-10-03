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
    return <Repository repositoryId={this.props.repository.id} />;
  }

  render() {
    const { repository } = this.props;
    return (
      <li key={repository.name} onClick={this.handleClick}>
        {repository.name}
        {!!this.state.open && this.renderDetail()}
      </li>
    );
  }
}
