import React, { Component } from 'react';
import DogImage from './DogImage';
import Contenders from './Contenders';
import Leaderboard from './Leaderboard';
import Stats from './Stats';
import axios from 'axios';

class Picker extends Component {
  constructor(props) {
    super(props);

    /* We have 35+ dogs but for bracket simplicity, only show 32 */
    let shuffledDogs = this.shuffleArray(Array.from(props.dogs)).slice(0, 32);
    this.state = {
      dogs: shuffledDogs,
      contenders: shuffledDogs,
      sweetSixteen: [],
      eliteEight: [],
      finalFour: [],
      championship: [],
      dog1: shuffledDogs[0],
      dog2: shuffledDogs[1]
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleSweetSixteen = this.handleSweetSixteen.bind(this);
    this.handleEliteEight = this.handleEliteEight.bind(this);
    this.handleFinalFour = this.handleFinalFour.bind(this);
    this.handleChampionship = this.handleChampionship.bind(this);
    this.handleWinner = this.handleWinner.bind(this);
  }

  shuffleArray(dogs) {
    let temp = [];
    while (dogs.length > 0) {
      const index = Math.floor(Math.random() * Math.floor(dogs.length));
      temp.push(dogs.splice(index, 1)[0]);
    }
    return temp;
  }

  handleClick(dog) {
    if (this.state.sweetSixteen.length < 16) {
      this.handleSweetSixteen(dog);
    } else if (this.state.eliteEight.length < 8) {
      this.handleEliteEight(dog);
    } else if (this.state.finalFour.length < 4) {
      this.handleFinalFour(dog);
    } else if (this.state.championship.length < 2) {
      this.handleChampionship(dog);
    } else {
      this.handleWinner(dog);
    }
  }

  handleSweetSixteen(dog) {
    this.state.sweetSixteen.push(dog);

    const dogIndex = this.state.dogs.indexOf(dog);
    if (dogIndex < (16 * 2 - 2)) {
      this.setState({
        dog1: this.state.dogs[dogIndex + 1 + (dogIndex % 2 == 0 ? 1 : 0)],
        dog2: this.state.dogs[dogIndex + 2 + (dogIndex % 2 == 0 ? 1 : 0)]
      });
    } else {
      const shuffledSweetSixteen = this.shuffleArray(this.state.sweetSixteen);
      this.state.sweetSixteen = shuffledSweetSixteen;
      this.setState({
        dog1: this.state.sweetSixteen[0],
        dog2: this.state.sweetSixteen[1],
        contenders: shuffledSweetSixteen
      });
    }
  }

  handleEliteEight(dog) {
    this.state.eliteEight.push(dog);
    axios.post(`/api/dogs/${dog["id"]}/elite-eight`, { id: dog["id"] });

    const dogIndex = this.state.sweetSixteen.indexOf(dog);
    if (dogIndex < (8 * 2 - 2)) {
      this.setState({
        dog1: this.state.dogs[dogIndex + 1 + (dogIndex % 2 == 0 ? 1 : 0)],
        dog2: this.state.dogs[dogIndex + 2 + (dogIndex % 2 == 0 ? 1 : 0)]
      });
    } else {
      const shuffledEliteEight = this.shuffleArray(this.state.eliteEight);
      this.state.eliteEight = shuffledEliteEight;
      this.setState({
        dog1: this.state.eliteEight[0],
        dog2: this.state.eliteEight[1],
        contenders: shuffledEliteEight
      });
    }
  }

  handleFinalFour(dog) {
    this.state.finalFour.push(dog);
    axios.post(`/api/dogs/${dog["id"]}/final-four`, { id: dog["id"] });

    const dogIndex = this.state.eliteEight.indexOf(dog);
    if (dogIndex < (4 * 2 - 2)) {
      this.setState({
        dog1: this.state.eliteEight[dogIndex + 1 + (dogIndex % 2 == 0 ? 1 : 0)],
        dog2: this.state.eliteEight[dogIndex + 2 + (dogIndex % 2 == 0 ? 1 : 0)]
      });
    } else {
      const shuffledFinalFour = this.shuffleArray(this.state.finalFour);
      this.state.finalFour = shuffledFinalFour;
      this.setState({
        dog1: this.state.finalFour[0],
        dog2: this.state.finalFour[1],
        contenders: shuffledFinalFour
      });
    }
  }

  handleChampionship(dog) {
    this.state.championship.push(dog);
    axios.post(`/api/dogs/${dog["id"]}/championship`, { id: dog["id"] });

    const dogIndex = this.state.finalFour.indexOf(dog);
    if (dogIndex < 2) {
      this.setState({
        dog1: this.state.finalFour[dogIndex + 1 + (dogIndex % 2 == 0 ? 1 : 0)],
        dog2: this.state.finalFour[dogIndex + 2 + (dogIndex % 2 == 0 ? 1 : 0)]
      });
    } else {
      this.setState({
        dog1: this.state.championship[0],
        dog2: this.state.championship[1],
        contenders: this.state.championship
      });
    }
  }

  handleWinner(dog) {
    axios.post(`/api/dogs/${dog["id"]}/winner`, { id: dog["id"] });
    this.setState({
      contenders: [dog]
    });
  }

  render() {
    const { dog1, dog2, contenders } = this.state;
    if (contenders.length == 1) {
      return (
        <div className="picker">
          <Leaderboard />
          <DogImage dog={contenders[0]} />
          <div className="winnerInfo">
            <Contenders list={contenders} />
            <Stats winner={contenders[0]} />
          </div>
        </div>
      );
    } else {
      return (
        <div className="picker">
          <DogImage dog={dog1} onClick={this.handleClick} />
          <Contenders list={contenders} />
          <DogImage dog={dog2} onClick={this.handleClick} />
        </div>
      );
    }
  }
}

export default Picker;
