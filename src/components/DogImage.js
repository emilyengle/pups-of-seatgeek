import React, { Component } from 'react';
import {imgList} from './utils';

class DogImage extends Component {
  constructor(props) {
      super(props);
      this.state = {
         img: imgList[this.props.img][1],
         imgName: imgList[props.img][0]
      };
  }

  componentDidUpdate(oldProps) {
    if (oldProps.img !== this.props.img) {
      this.setState({
        img: imgList[this.props.img][1],
        imgName: imgList[this.props.img][0]
      });
    }
  }

  render() {
    return (
      <div className="dogImage">
        <img src={this.state.img} onClick={() => this.props.onClick(this.props.img)} />
        <p><b>{this.state.imgName}</b></p>
      </div>
    )
  }
}

export default DogImage;
