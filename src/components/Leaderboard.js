import React, { Component } from 'react';
import axios from 'axios';

class Leaderboard extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.getData = this.getData.bind(this);
    this.getDogData = this.getDogData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    this.getDogData().then(data => {
      let dogs = [];
      let totalVotes = 0;

      for (const dog of data) {
        totalVotes += dog.num_votes;
        dogs.push({
          id: dog.id,
          name: dog.name,
          numVotes: dog.num_votes
        });
      }

      dogs.sort((d1, d2) => {
        return d2.numVotes - d1.numVotes;
      });

      const leaders = dogs.slice(0, 6);
      for (const leader of leaders) {
        const percentage = parseInt(leader.numVotes) * 100 / parseInt(totalVotes);
        leader['percentage'] = percentage.toFixed(0);
      }

      this.setState({
        totalVotes: totalVotes,
        leaders: leaders
      });
    });
  }

  getDogData() {
    return axios({
      method: 'GET',
      url: '/api/dogs'
    }).then(data => {
      return data.data.data;
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    const {
      totalVotes,
      leaders
    } = this.state;

    if (!totalVotes) {
      return null;
    }

    return (
      <div className="leaderStats">
        <h3>SeatGeek's Faves ❤️</h3>
        <h4>Play again to keep voting for your favorite!</h4>
        {leaders.map((leader, key) => {
          return (<p key={key}>
            {leader.percentage}% - <b>{leader.name}</b> ({leader.numVotes} votes)
          </p>);
        })}
      </div>
    );
  }
}

export default Leaderboard;
