import React, { Component } from 'react';
import './IconText.css';

class Icontext extends Component {
  render() {
    const { iconClass, text } = this.props;

    return (
      <div className="icon-wrap">
        <span className={'icon ' + iconClass}></span>
        <span className="icon-text font-medium-2">{text}</span>
      </div>
    );
  }
}

export default Icontext;
