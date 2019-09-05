import React, { Component } from 'react';
import axios from 'axios';

class Stats extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.getVoteCounts = this.getVoteCounts.bind(this);
    this.getVoteData = this.getVoteData.bind(this);
  }

  componentDidMount() {
    this.getVoteCounts();
  }

  getVoteData() {
    return axios({
      method: 'GET',
      url: '/api/dogs'
    }).then(data => {
      return data.data.data;
    }).catch(err => {
      console.log(err);
    });
  }

  getVoteCounts() {
    this.getVoteData().then(data => {
      let totalVotes = 0;
      let winnerVotes = 0;
      let championshipVotes = 0;
      let finalFourVotes = 0;

      for (const dog of data) {
        totalVotes += dog.num_votes;
        if (dog.id === this.props.winner.id) {
          winnerVotes = dog.num_votes;
          championshipVotes = dog.num_championships;
          finalFourVotes = dog.num_finalfours;
        }
      }

      const winnerPercentage = parseInt(winnerVotes) * 100 / parseInt(totalVotes);
      const championshipPercentage = parseInt(championshipVotes) * 100 / parseInt(totalVotes);
      const finalFourPercentage = parseInt(finalFourVotes) * 100 / parseInt(totalVotes);

      this.setState({
        totalVotes: totalVotes,
        winnerPercentage: winnerPercentage.toFixed(0),
        championshipPercentage: championshipPercentage.toFixed(0),
        finalFourPercentage: finalFourPercentage.toFixed(0)
      });
    });
  }

  render() {
    const { winner } = this.props;
    const {
      totalVotes,
      winnerPercentage,
      championshipPercentage,
      finalFourPercentage
    } = this.state;

    if (!totalVotes) {
      return null;
    }

    return (
      <div class="winnerStats">
        <h3>{winner.name}'s Stats:</h3>
        <p>🥇 Champion in {winnerPercentage}% of brackets!</p>
        <p>🥈 Final 2 in {championshipPercentage}% of brackets</p>
        <p>🥉 Final 4 in {finalFourPercentage}% of brackets</p>
        <p>(from {totalVotes} brackets played)</p>
      </div>
    );
  }
}

export default Stats;
