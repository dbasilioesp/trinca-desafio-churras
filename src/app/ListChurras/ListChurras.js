import React, { Component } from 'react';

import churrasList from '../../assets/fixtures/churras';
import './ListChurras.css';

import CardItem from './CardItem/CardItem';
import CardAddItem from './CardAddItem/CardAddItem';


class ListChurras extends Component {
  render() {

    const cardList = churrasList.map((item) =>
      <CardItem item={item} key={item.id} />
    );

    return (
      <div className="container-medium">
        <div className="grid-churras">{cardList} <CardAddItem /></div>
      </div>
    );
  }
}

export default ListChurras;
