import React, { Component } from "react";
import { bindActionCreators } from "redux";
import fetchPokemons from "../actions/fetchPokemons";
import { connect } from "react-redux";
import getPokemons from "../selectors/getPokemons";
import PokemonListItem from "../components/PokemonListItem";

class PokemonList extends Component {
  componentDidMount() {
    this.props.actions.fetchPokemons();
  }

  renderPokemons() {
    return this.props.pokemons.map((pokemon) => (
      <PokemonListItem pokemon={pokemon} key={pokemon.name} />
    ));
  }

  render() {
    const { pokemons } = this.props;
    if (pokemons && pokemons.length > 0) {
      return <ul> {this.renderPokemons()} </ul>;
    } else {
      return <p>No pokemons yet</p>;
    }
  }
}

const mapStateToProps = (state) => ({
  pokemons: getPokemons(state)
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ fetchPokemons }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonList);
