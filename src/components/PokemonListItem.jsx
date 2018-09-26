import React, { Component } from "react";
import Pokemon from "../containers/Pokemon";

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
    return <Pokemon pokemonName={this.props.pokemonName} />;
  }

  render() {
    const { pokemonName } = this.props;
    return (
      <li key={pokemonName} onClick={this.handleClick}>
        {pokemonName}
        {!!this.state.open && this.renderDetail()}
      </li>
    );
  }
}
