import React, { Component } from 'react';
import axios from 'axios';

class Stats extends Component {
  constructor(props) {
    super(props);

    this.getVoteCount = this.getVoteCount.bind(this);
  }

  getVoteCount() {
    axios({
      method: 'GET',
      url: '/api/dogs'
    }).then(data => {
      debugger;
      return data.data.data;
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    const totalVotes = this.getVoteCount();
    return (
      <div>stats</div>
    );
  }
}

export default Stats;
