import moment from 'moment';
import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import './CardItem.css';
import { TweenMax } from 'gsap/src/uncompressed/TweenMax';

class CardItem extends Component {
  constructor(props) {
    super(props);
    this.goToDetail = this.goToDetail.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  goToDetail() {
    const { item, history } = this.props;
    history.push('/churras/detail/' + item.id);
  }

  handleClick(event) {
    const cards = document.querySelectorAll('.grid-churras > *');
    TweenMax.staggerTo(cards, 0.8, { scale: 0, ease: 'Back.easeIn' }, 0.2, this.goToDetail);
  }

  render() {
    const { item } = this.props;
    const date = moment(item.date).format('DD[/]MM');
    let total = item.partners.reduce((total, currentItem) => total + currentItem.value, 0)
    total = 'R$' + total;

    return (

      <div className="card-item" onClick={this.handleClick}>
        <div className="card-date text-mark-1">{date}</div>
        <div className="card-title font-medium-2">
          <strong>{item.title}</strong>
        </div>
        <div className="card-details">
          <div className="card-detail">
            <span className="icon people-icon"></span>
            <span className="font-medium-2">{item.partners.length}</span>
          </div>
          <div className="card-detail">
            <span className="icon money-icon"></span>
            <span className="font-medium-2">{total}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CardItem);
