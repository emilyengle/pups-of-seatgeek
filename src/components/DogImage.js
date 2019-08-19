import React, { Component } from 'react';

class DogImage extends Component {
  constructor(props) {
      super(props);

      const {dog} = props;
      this.state = {
         img: dog['pic'],
         imgName: dog['name']
      };
  }

  componentDidUpdate(oldProps) {
    if (oldProps.dog['id'] !== this.props.dog['id']) {
      this.setState({
        img: this.props.dog['pic'],
        imgName: this.props.dog['name']
      });
    }
  }

  render() {
    return (
      <div className="dogImage">
        <img src={this.state.img} onClick={() => this.props.onClick(this.props.dog)} />
        <p><b>{this.state.imgName}</b></p>
      </div>
    )
  }
}

export default DogImage;
