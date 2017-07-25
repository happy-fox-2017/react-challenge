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
      console.log(data);
    }).catch(err => {
      console.log(err)
    })
  }
  
  New_Person () {
    let data = this.state.data_api
    return (
      <div>
        <tr>
          <th> Name </th>
          <th> Gender </th>
          <th> Age </th>
        </tr>
          { data.map(results => {
              return (
                <tr>
                  <td> {results.name} </td> 
                  <td> {results.gender} </td> 
                  <td> {results.birth_year} </td>
                </tr>
              )
            })
          }
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
          { (this.state.data_api==='') ? "Waiting" : this.New_Person()}
        </div>
      </div>
    );
  }
}

export default App;
