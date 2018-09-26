import React, { Component } from "react";

export default class PokemonListItem extends Component {
  constructor() {
    super();
    this.state = { open: false };
  }

  handleClick = () => {
    console.log("handling click");
    this.setState({ open: !this.state.open });
  };

  renderDetail() {
    return <p>Pokemon detail here</p>;
  }

  render() {
    const { pokemon } = this.props;
    return (
      <li key={pokemon.url} onClick={this.handleClick}>
        {pokemon.name}
        {!!this.state.open && this.renderDetail()}
      </li>
    );
  }
}
