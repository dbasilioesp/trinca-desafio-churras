import React, { Component } from 'react';
import './Partner.css';

class Partner extends Component {
  render() {
    const { partner } = this.props;

    const paidClass = partner.paid ? 'circle--full' : '';

    return (
      <div className="partner">
        <span className={'circle ' + paidClass}></span>
        <div className="font-medium-2 bold-weight">{partner.name}</div>
        <div className="font-medium-2 bold-weight">R${partner.value},00</div>
      </div>
    );
  }
}

export default Partner;
