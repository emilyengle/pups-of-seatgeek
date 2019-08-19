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
    const {dog} = this.props;
    const instaHandle = dog['insta'];
    const instaUrl = 'https://instagram.com/' + instaHandle;

    return (
      <div className="dogImage">
        <img src={this.state.img} onClick={() => this.props.onClick(dog)} />
        <h4><b>{this.state.imgName}</b></h4>
        <p>🍼 proud parent: {dog['owner']}</p>
        {dog['insta'] && <p>📸 insta: <a href={instaUrl} target="_blank">{'@' + instaHandle}</a></p>}
      </div>
    )
  }
}

export default DogImage;
