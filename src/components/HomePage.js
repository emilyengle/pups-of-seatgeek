import React, { Component } from 'react';
//import Picker from './Picker';
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

  // renderDogs() {
  //   if (this.state.dataLoaded) {
  //     return this.state.dogs.map(dog => {
  //       return (
  //         <div key={dog.id}>
  //           <p>{dog.name}</p>
  //           <p>{dog.breed}</p>
  //         </div>
  //       );
  //     })
  //   } else {
  //     return (<p>Loading...</p>);
  //   }
  // }

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
      </div>
    );
  }
}

export default HomePage;
