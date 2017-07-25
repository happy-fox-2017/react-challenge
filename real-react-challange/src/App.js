import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor() {
    super()
    this.state = {
      api: {}
    }
  }

  componentDidMount() {
    axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=zkv4qNkn6r5RFoxMdNSNjBUX4zSVvl1TgifvRZd5')
    .then(response => {
      this.setState({api: response.data})
      console.log(this.state.api);
    })
  }

  hasilApi() {
    return this.state.api.photos.map(mars => {
      return (
        <div key={mars.id}>
          <a target="_blank" href={mars.img_src}>
            <img src={mars.img_src} alt="Fjords" width="1080" height="720" />
          </a>
        </div>
      )
    })

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Mars Photo Exhibition </h2>
        </div>
        {
         this.state.api.photos ? this.hasilApi() : <div className="loader"></div>
        }

      </div>
    );
  }
}

export default App;
