import React from 'react';

import './App.css';
import SearchProfile from './Search';
import Profile from './Profile';

const API = 'https://api.github.com/users';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'raynormw',
      name:'',
      avatar:'',
      location:'',
      repos:'',
      followers: '',
      following:'',
      homeUrl:'',
      notFound:''
    }
  }

  _fetchProfile(username) {
    let url = `${API}/${username}`;
    fetch(url)
      .then((res) => res.json() )
      .then((data) => {
        console.log(data);
        this.setState({
          username: data.login,
          name: data.name,
          avatar: data.avatar_url,
          location: data.location,
          repos: data.public_repos,
          followers: data.followers,
          following: data.following,
          homeUrl: data.html_url,
          notFound: data.message
        })
      })
      .catch((error) => console.log('Uh oh! There Is A Problem..') )
  }

  componentDidMount() {
    this._fetchProfile(this.state.username);
  }

  render() {
    return (
      <div className="App">
        <div>
          <section id="card">
            <SearchProfile fetchProfile={this._fetchProfile.bind(this)}/>
            <Profile data={this.state} />
          </section>
          <span className="author">GitHub Card With ReactJs - Created By <a href="http://tirtawiryaputra.com" target="_blank" rel="noopener noreferrer" title="Tirta Wirya Putra">Tirta Wirya Putra</a></span>
        </div>
      </div>
    );
  }
}

export default App;
