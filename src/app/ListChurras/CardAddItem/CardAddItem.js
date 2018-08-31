import React, { Component } from 'react';
import './CardAddItem.css';

class CardAddItem extends Component {
  render() {
    return (
      <div className="card-add-item">
        <div className="border-icon">
          <span className="icon churras-icon"></span>
        </div>
        <div className="font-medium-2">
          <strong>Adicionar Churras</strong>
        </div>
      </div>
    );
  }
}

export default CardAddItem;
