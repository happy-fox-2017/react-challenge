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

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Mars Photo Exhibition </h2>
        </div>
        <div>
          {
            this.state.api.photos.map( mars => {
              <div class="gallery">
              <a target="_blank" href="fjords.jpg">
              <img src="fjords.jpg" alt="Fjords" width="300" height="200" />
              </a>
              <div class="desc">Add a description of the image here</div>
              </div>
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
