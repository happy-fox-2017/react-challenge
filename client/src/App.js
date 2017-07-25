import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor (props){
    super(props)
    this.state = {
      peoples: []
    }
  }
  componentWillMount(){
    let self = this
    axios.get("https://swapi.co/api/people")
      .then((response)=>{
        // console.log(response.data);
        const people = response.data.results
        console.log("---------------people");
        console.log(people);
        this.setState({peoples: people})
        // people.forEach(x => {
        //   self.state.peoples.push(x)
        // })
        console.log("state peoples ---------");
        console.log(self.state.peoples);
      })
      .catch((err)=>{
        console.log(err);
      })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <ul>
          {this.state.peoples.map((people, index) =>
              <li key={index}><img src={"https://lumiere-a.akamaihd.net/v1/images/X-Wing-Fighter_47c7c342.jpeg?region=0%2C96%2C1536%2C769"} className="img-responsive"/>{people.name}</li>
            )}
        </ul>
      </div>
    );
  }
}

export default App;
