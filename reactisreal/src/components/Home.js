import React from 'react'
import Pokemon from 'pokedex-promise-v2'
class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      pokemonData: []
    }

  }

  getListPokemon () {
    var P = new Pokemon()
    var interval = {
     limit: 0,
     offset: 100
    }
    P.getPokemonsList(interval)
     .then(function(response) {
       this.state.pokemonData = response.results
       console.log(response);
     })
     .catch(function(error) {
      console.log('There was an ERROR: ', error);
     });
  }

  componentWillMount() {
    this.getListPokemon()
  }

  render () {
    return (
      <div>
        <h1>LIST POKEMON</h1>
        <p>Name:</p>
      </div>
    )
  }
}

export default Home
