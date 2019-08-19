import React, { Component } from 'react';
import DogImage from './DogImage';
import Contenders from './Contenders';

class Picker extends Component {
  constructor(props) {
      super(props);

      let dogs = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
      let shuffledDogs = this.shuffleArray(dogs);

      this.state = {
        dogs: shuffledDogs,
        contenders: shuffledDogs,
        eliteEight: [],
        finalFour: [],
        championship: [],
        img1: shuffledDogs[0],
        img2: shuffledDogs[1]
      };

      this.handleClick = this.handleClick.bind(this);
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

  handleClick(img) {
    if (this.state.eliteEight.length < 8) {
      this.handleEliteEight(img);
    } else if (this.state.finalFour.length < 4) {
      this.handleFinalFour(img);
    } else if (this.state.championship.length < 2) {
      this.handleChampionship(img);
    } else {
      this.handleWinner(img);
    }
  }

  handleEliteEight(img) {
    this.state.eliteEight.push(img);
    const dogIndex = this.state.dogs.indexOf(img);
    if (dogIndex < 14) {
      this.setState({
        img1: this.state.dogs[dogIndex + 1 + (dogIndex % 2 == 0 ? 1 : 0)],
        img2: this.state.dogs[dogIndex + 2 + (dogIndex % 2 == 0 ? 1 : 0)]
      });
    } else {
      const shuffledEliteEight = this.shuffleArray(this.state.eliteEight);
      this.state.eliteEight = shuffledEliteEight;
      this.setState({
        img1: this.state.eliteEight[0],
        img2: this.state.eliteEight[1],
        contenders: shuffledEliteEight
      });
    }
  }

  handleFinalFour(img) {
    this.state.finalFour.push(img);
    const dogIndex = this.state.eliteEight.indexOf(img);
    if (dogIndex < 6) {
      this.setState({
        img1: this.state.eliteEight[dogIndex + 1 + (dogIndex % 2 == 0 ? 1 : 0)],
        img2: this.state.eliteEight[dogIndex + 2 + (dogIndex % 2 == 0 ? 1 : 0)]
      });
    } else {
      const shuffledFinalFour = this.shuffleArray(this.state.finalFour);
      this.state.finalFour = shuffledFinalFour;
      this.setState({
        img1: this.state.finalFour[0],
        img2: this.state.finalFour[1],
        contenders: shuffledFinalFour,
      });
    }
  }

  handleChampionship(img) {
    this.state.championship.push(img);
    const dogIndex = this.state.finalFour.indexOf(img);
    if (dogIndex < 2) {
      this.setState({
        img1: this.state.finalFour[dogIndex + 1 + (dogIndex % 2 == 0 ? 1 : 0)],
        img2: this.state.finalFour[dogIndex + 2 + (dogIndex % 2 == 0 ? 1 : 0)]
      });
    } else {
      this.setState({
        img1: this.state.championship[0],
        img2: this.state.championship[1],
        contenders: this.state.championship
      });
    }
  }

  handleWinner(img) {
    this.setState({
      contenders: [img]
    });
  }

  render() {
    const {img1, img2, contenders} = this.state;
    if (contenders.length == 1) {
      return (
        <div className="picker">
          <DogImage img={contenders[0]} />
          <Contenders list={contenders} />
        </div>
      )
    } else {
      return (
        <div className="picker">
          <DogImage img={img1} onClick={this.handleClick} />
          <Contenders list={contenders} />
          <DogImage img={img2} onClick={this.handleClick} />
        </div>
      )
    }
  }
}

export default Picker;
