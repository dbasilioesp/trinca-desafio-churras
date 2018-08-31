import * as moment from 'moment';
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './CardItem.css';

class CardItem extends Component {

  render() {
    const { item } = this.props;
    const date = moment(item.date).format('DD[/]MM');
    let total = item.partners.reduce((total, currentItem) => total + currentItem.value, 0)
    total = 'R$' + total;

    return (
      <Link to={'/churras/detail/' + item.id}>
        <div className="card-item">
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
      </Link>
    );
  }
}

export default CardItem;
