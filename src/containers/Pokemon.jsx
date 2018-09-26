import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import fetchPokemon from "../actions/fetchPokemon";
import getPokemon from "../selectors/getPokemon";

class Pokemon extends Component {
  componentDidMount() {
    const {
      pokemonName,
      actions: { fetchPokemon }
    } = this.props;

    fetchPokemon(pokemonName);
  }

  render() {
    const { pokemon } = this.props;
    return (
      <div>
        <p> height: {pokemon.height} </p>
        <p> weight: {pokemon.weight} </p>
      </div>
    );
  }
}

const mapStateToProps = (state, { pokemonName }) => ({
  pokemon: getPokemon(state, { pokemonName })
});
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ fetchPokemon }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pokemon);
