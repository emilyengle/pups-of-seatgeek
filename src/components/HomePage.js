import React, { Component } from 'react';
import Picker from './Picker';
import axios from 'axios';

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      dogs: [],
      dataLoaded: false
    };
  }

  componentDidMount() {
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

  render() {
    return (
      <div className="main">
        <div className="header">
          <img src={'./dog-paw.png'} alt="Outline of dog's paw" />
          <h1>Dogs of SeatGeek</h1>
        </div>
        <div className="subHeader">
          <p>Choose the superior dog of SeatGeek, March Madness tournament-style.</p>
          <p>Click a picture below to choose your favorite!</p>
        </div>
        {this.state.dataLoaded ? <Picker dogs={this.state.dogs} /> : null}
      </div>
    );
  }
}

export default HomePage;
