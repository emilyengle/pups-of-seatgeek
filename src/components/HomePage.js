import React, { Component } from 'react';
import Picker from './Picker';
import axios from 'axios';
import queryString from 'query-string';

class HomePage extends Component {
  constructor() {
    super();

    const qs = queryString.parse(location.search);
    this.state = {
      dogs: [],
      dataLoaded: false,
      addDogStatus: '',
      admin: 'admin' in qs
    };

    this.submitDog = this.submitDog.bind(this);
  }

  componentDidMount() {
    if (this.state.admin) {
      return;
    }

    axios({
      method: 'GET',
      url: '/api/dogs'
    }).then(data => {
      this.setState({
        dogs: data.data.data,
        dataLoaded: true
      })
    }).catch(err => {
      console.log(err);
    });
  }

  renderBracket() {
    return (<div className="main">
      <div className="header">
        <img src={'./dog-paw.png'} alt="Outline of dog's paw" />
        <h1>Dogs of SeatGeek</h1>
        <img src={'./dog-paw.png'} alt="Outline of dog's paw" />
      </div>
      <div className="subHeader">
        <p>Choose the superior dog of SeatGeek, March Madness tournament-style.</p>
        <p>Click a picture below to choose your favorite!</p>
      </div>
      {this.state.dataLoaded ? <Picker dogs={this.state.dogs} /> : null}
    </div>);
  }

  renderAdmin() {
    let dogStatusMessage;
    switch (this.state.addDogStatus) {
      case 'success':
        dogStatusMessage = 'Add successful.';
        break;
      case 'error':
        dogStatusMessage = 'Error adding. Wrong password?';
        break;
      default:
        dogStatusMessage = '';
    }

    return (
      <form>
        <br /><br />
        {dogStatusMessage && <div>{dogStatusMessage}</div>}
        <br />
        <label>
          Dog's Name*
          <input type="text" value={this.state.name} onChange={() => this.setState({name: event.target.value})} />
        </label>
        <br />
        <label>
          Parent's First Name + Last Initial*
          <input type="text" value={this.state.parent} onChange={() => this.setState({parent: event.target.value})} />
        </label>
        <br />
        <label>
          Dog's Insta Handle (no URL or '@', just the handle)
          <input type="text" value={this.state.insta} onChange={() => this.setState({insta: event.target.value})} />
        </label>
        <br />
        <label>
          Picture URL*
          <input type="text" value={this.state.pic} onChange={() => this.setState({pic: event.target.value})} />
        </label>
        <br />
        <label>
          Password
          <input type="password" value={this.state.pw} onChange={() => this.setState({pw: event.target.value})} />
        </label>
        <br />
        <button type="submit" onClick={this.submitDog}>Submit Dog</button>
      </form>
    );
  }

  submitDog(e) {
    e.preventDefault();
    this.setState({ addDogStatus: '' });
    const {name, parent, insta, pic, pw} = this.state;

    axios({
      method: 'POST',
      url: '/api/dogs/add',
      params: {
        name: name,
        parent: parent,
        insta: insta,
        pic: pic,
        password: pw
      }
    }).then(data => {
      this.setState({ addDogStatus: 'success' });
    }).catch(err => {
      this.setState({ addDogStatus: 'error' });
    });
  }

  render() {
    return (
      <div>
        {this.state.admin ? this.renderAdmin() : this.renderBracket()}
      </div>
    );
  }
}

export default HomePage;
