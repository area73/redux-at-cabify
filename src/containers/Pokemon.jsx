import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import fetchPokemon from "../actions/fetchPokemon";

class Pokemon extends Component {
  componentDidMount() {
    const {
      pokemonName,
      actions: { fetchPokemon }
    } = this.props;

    fetchPokemon(pokemonName);
  }

  render() {
    return <p>Detail view here</p>;
  }
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ fetchPokemon }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pokemon);
