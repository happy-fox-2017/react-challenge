import React from 'react'
import EPokemon from 'pokedex-promise-v2'
import Bulma from 'bulma/css/bulma.css'
class Pokemon extends React.Component {
  constructor() {
    super()
    this.state = {
      pokemonData: []
    }
  }

  getListPokemon () {
    var P = new EPokemon()
    var interval = {
     limit: 0,
     offset: 100
    }
    P.getPokemonsList(interval)
     .then(function(response) {
      //  this.setState({ this.state.pokemonData: response.results })
       console.log(response);
     })
     .catch(function(error) {
      console.log('There was an ERROR: ', error);
     });
  }

  ComponentWillMount () {
    this.getListPokemon()
  }

  // var data = this.state.pokemonData
  // console.log('hi data : ',data);
  GetData () {
    return (
      <div>
        <div class="card">
          <div class="card-content">
            <p class="title">

            </p>
            <p class="subtitle">
              Jeff Atwood
            </p>
          </div>
          <footer class="card-footer">
            <p class="card-footer-item">
              <span>
                View on <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
              </span>
            </p>
            <p class="card-footer-item">
              <span>
                Share on <a href="#">Facebook</a>
              </span>
            </p>
          </footer>
        </div>
      </div>
    )
  }


  render () {
    return (
      <div>
        <h1>LIST POKEMON</h1>

      </div>
    )
  }
}


export default Pokemon
