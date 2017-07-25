import React from 'react'
import Axios from 'axios'

import logo from '../logo.svg'

class StarWars extends React.Component {
  constructor() {
    super()
    this.state = {
      starWars: ""
    }
  }

  render() {
    if (this.state.starWars === "") {
      return (
        <div>
          <h1 className="title is-1">Star Wars</h1>
          <hr />
          <div className="field">
            <button className="button is-primary" onClick={() => this.generateSW()}>Give Me Some Star Wars!</button>
          </div>
        </div>
      )
    } else if (this.state.starWars === "wait") {
      return (
        <div>
          <h1 className="title is-1">Star Wars</h1>
          <hr />
          <div className="field" style={{marginBottom: "30px"}}>
            <button className="button is-primary" onClick={() => this.generateSW()}>Give Me Some Star Wars!</button>
          </div>
          <div className="field">
            <div className="App-header field">
              <img src={logo} className="App-logo2" alt="logo" />
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <h1 className="title is-1">Star Wars</h1>
          <hr />
          <div className="field" style={{marginBottom: "30px"}}>
            <button className="button is-primary" onClick={() => this.generateSW()}>Give Me Some Star Wars!</button>
          </div>
          <div className="field" style={{textAlign: "left"}}>
            <p className="subTitle is-3">Name: {this.state.starWars.name}</p>
            <p className="subTitle is-3">Birthdate: {this.state.starWars.birth_year}</p>
            <p className="subTitle is-3">Height: {this.state.starWars.height}</p>
            <p className="subTitle is-3">Weight: {this.state.starWars.mass} Kg</p>
            <p className="subTitle is-3">more info: <a href={this.state.starWars.url} target="_blank">{this.state.starWars.url}</a></p>
          </div>
        </div>
      )
    }

  }

  generateSW() {
    this.setState({
      starWars: "wait"
    })
    let angkaAcak = Math.floor(Math.random() * 87)
    let self = this
    Axios.get('http://swapi.co/api/people/'+angkaAcak)
    .then(function(response) {
      self.setState({
        starWars: response.data
      })
      console.log(response.data);
    })
    .catch(function(err) {
      alert(err)
    })
  }
}

export default StarWars
