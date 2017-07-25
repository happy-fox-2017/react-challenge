import React, { Component } from 'react';
import logo from '../logo.svg';
import axios from 'axios';
import '../App.css';

class App extends Component {
  
  constructor () {
    super();
    this.state = {
      data_api: '',
    }
  }
  
  componentDidMount() {
    axios.get("https://swapi.co/api/people")
    .then(data => {
      this.setState({data_api: data.data.results})
      console.log(this.state.data_api[0].name)
    }).catch(err => {
      console.log(err)
    })
  }
  
  New_Person () {
    let data = this.state.data_api
    return (
      <div> 
        <ul>
          { data.map(results => {
              return (
                <div>
                  <li> Name : {results.name} </li>
                  <li> Person : {results.gender} </li>
                  <li> Birthyear : {results.birth_year} </li>
                </div>
              )
            })
          }
        </ul>
      </div>
    )
  }
  
  
  render() {
  
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          { (this.state.data_api==='') ? "Tunggu" : this.New_Person()}
        </div>
      </div>
    );
  }
}

export default App;
