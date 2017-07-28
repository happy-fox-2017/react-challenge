import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

const SWAPI_URL = 'https://swapi.co/api/people';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      people: [],
    };
  }

  componentDidMount() {
    axios.get(SWAPI_URL)
    .then((response) => {
      this.setState({
        people: response.data.results,
      });
    });
  }
  render() {
    return (
      <div className="App">
        <ol>
          {
            this.state.people.map((person) => {
              return (
                <li key={person.name}>{person.name}</li>
              );
            })
          }
        </ol>
      </div>
    );
  }
}

export default App;
