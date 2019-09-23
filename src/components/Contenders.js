import React, { Component } from 'react';

class Contenders extends Component {
  render() {
    const {list} = this.props;

    let title = 'Starting Contenders:';
    if (list.length == 16) {
      title = 'Your Sweet 16';
    } else if (list.length == 8) {
      title = 'Your Elite 8';
    } else if (list.length == 4) {
      title = 'Your Final 4';
    } else if (list.length == 2) {
      title = 'The Championship!'
    } else if (list.length == 1) {
      title = "And your winner is:";
    }

    let contenders = list.map(contender => {
      return (
        <p key={contender['id']}>{contender['name']}</p>
      );
    });

    return (
      <div className={list.length >= 16 ? 'contenders-large' : 'contenders'}>
        <h3>{title}</h3>
        {list.length > 16 &&
          <div className="contenders-container">
            <div className="contenders-child">{contenders.slice(0, 16)}</div>
            <div className="contenders-child">{contenders.slice(16)}</div>
          </div>
        }
        {list.length <= 16 && contenders}
        {list.length === 1 ? <p>🎉🎉🎉</p> : ''}
      </div>
    )
  }
}

export default Contenders;
