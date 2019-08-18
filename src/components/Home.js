import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
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

  renderDogs() {
    if (this.state.dataLoaded) {
      return this.state.dogs.map(dog => {
        return (
          <div key={dog.id}>
            <p>{dog.name}</p>
            <p>{dog.breed}</p>
          </div>
        );
      })
    } else {
      return (<p>Loading...</p>);
    }
  }

  render() {
    return (
      <div className="Home">
        {this.renderDogs()}
      </div>
    );
  }
}

export default Home;
