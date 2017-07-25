import React from 'react'
import Axios from 'axios'

import logo from '../logo.svg'

class RandomCat extends React.Component {
  constructor() {
    super()
    this.state = {
      gambar: ""
    }
  }

  render() {
    if (this.state.gambar === "") {
      return (
        <div>
          <h1 className="title is-1">Random Cat</h1>
          <p className="subTitle is-3">Let's get a cat!</p>
          <hr />
          <button className="button is-info" onClick={() => this.getCat()}>Get One!</button>
        </div>
      )
    } else if (this.state.gambar === "wait") {
      return (
        <div>
          <h1 className="title is-1">Random Cat</h1>
          <p className="subTitle is-3">Let's get a cat!</p>
          <hr />
          <img src={logo} className="App-logo2" alt="logo" />
          <br />
          <br />
          <button className="button is-info" onClick={() => this.getCat()}>Get One!</button>
        </div>
      )
    } else {
      return (
        <div>
          <h1 className="title is-1">Random Cat</h1>
          <p className="subTitle is-3">Let's get a cat!</p>
          <hr />
          <img src={this.state.gambar} alt="gambar-kucing" style={{height: "300px"}}/>
          <br />
          <br />
          <button className="button is-info" onClick={() => this.getCat()}>Get Another One!</button>
        </div>
      )
    }
  }

  getCat() {
    this.setState({
      gambar: "wait"
    })
    let self = this
    Axios.get('http://random.cat/meow')
    .then(function(response) {
      self.setState({
        gambar: response.data.file
      })
    })

  }
}

export default RandomCat
