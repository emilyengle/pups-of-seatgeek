import React, { Component } from 'react';
import Img from 'react-image';
import Loader from 'react-loader-spinner';

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

  renderLoader() {
    return <Loader type="TailSpin" color="white" height={100} width={100} />;
  }

  render() {
    const {dog} = this.props;
    const instaHandle = dog['insta'];
    const instaUrl = 'https://instagram.com/' + instaHandle;

    return (
      <div className="dogImage">
        <Img
          src={this.state.img}
          onClick={() => this.props.onClick(dog)}
          loader={this.renderLoader()}
        />
        <h4><b>{this.state.imgName}</b></h4>
        <p>🍼 proud parent: {dog['owner']}</p>
        {dog['insta'] && <p>📸 insta: <a href={instaUrl} target="_blank">{'@' + instaHandle}</a></p>}
      </div>
    )
  }
}

export default DogImage;
