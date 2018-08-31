import React, { Component } from 'react';

import churrasList from '../../assets/fixtures/churras';
import './ListChurras.css';

import CardItem from './CardItem/CardItem';
import CardAddItem from './CardAddItem/CardAddItem';

import { TweenMax } from 'gsap/src/uncompressed/TweenMax';


class ListChurras extends Component {

  componentDidMount() {
    const cards = document.querySelectorAll('.grid-churras > *');
    TweenMax.staggerFrom(cards, 0.8, { scale: 0, ease: 'Back.easeOut' }, 0.2);
  }

  render() {

    const cardList = churrasList.map((item, index) =>
      <CardItem item={item} key={index} />
    );

    return (
      <div className="container-medium">
        <div className="grid-churras">{cardList} <CardAddItem /></div>
      </div>
    );
  }
}

export default ListChurras;
