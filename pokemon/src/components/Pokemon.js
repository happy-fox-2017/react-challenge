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

  // getListPokemon () {
  //   var P = new EPokemon()
  //   var interval = {
  //    limit: 99,
  //    offset: 100
  //   }
  //   P.getPokemonsList(interval)
  //    .then(function(response) {
  //      this.setState({
  //        pokemonData: response.results
  //      })
  //      console.log(response);
  //    })
  //    .catch(function(error) {
  //     console.log('There was an ERROR: ', error);
  //    });
  // }

  // ComponentDidMount () {
  //   this.getListPokemon()
  // }

  componentWillMount () {
    console.log("somthing bout you =====");
    console.log(this.state.pokemonData);
    var self = this
    var P = new EPokemon()
    var interval = {
     limit: 99,
     offset: 100
    }
    P.getPokemonsList(interval)
     .then(function(response) {
       self.setState({
         pokemonData: response.results
       })
      // this.state.pokemonData = response.results
      //  console.log(response.results);
     })
     .catch(function(error) {
      console.log('There was an ERROR: ', error);
     });
  }

  GetData () {
    let data = this.state.pokemonData
    console.log('mydata',data);
    const style = {
      card: {
        marginLeft: '100px',
        marginRight: '100px'
      }
    }
    return (
      <div>
        {this.state.pokemonData.map((x, index) => {
          return (
            <div className="card" style={style.card}>
              <div className="card-content" key={index}>
                <p className="title">
                  Pokemon Name: {x.name}
                </p>
                <p className="subtitle">
                  Pokemon Url: {x.url}
                </p>
              </div>
            </div>
          )
        })}

      </div>
    )
  }


  render () {
    return (
      <div>
        <h1>LIST POKEMON</h1>
        {this.state.pokemonData === '' ? "wait.." : this.GetData()}
      </div>
    )
  }
}


export default Pokemon
