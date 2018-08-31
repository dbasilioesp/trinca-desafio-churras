import moment from 'moment';
import React, { Component } from 'react';
import churrasList from '../../assets/fixtures/churras';
import './DetailChurras.css';
import IconText from '../IconText/IconText';
import Partner from './Partner/Partner';


class DetailChurras extends Component {
  constructor({ props, match }) {
    super(props)
    const item = churrasList.find((item) =>
      item.id.toString() === match.params.id.toString()
    );
    this.state = {
      item: item
    }
  }

  render() {
    let { item } = this.state;
    const date = moment(item.date).format('DD[/]MM');
    let total = item.partners.reduce((total, currentItem) => total + currentItem.value, 0);
    total = 'R$' + total;

    const partnersList = item.partners.map((partner) => <Partner partner={partner} />);

    return (
      <div className="container-medium bg-white">
        <div className="detail-churras">
          <div className="detail-header">
            <div>
              <div className="detail-date text-mark-1">{date}</div>
              <div className="detail-title font-large-2">
                <strong>{item.title}</strong>
              </div>
            </div>
            <div>
              <IconText iconClass="people-icon" text={item.partners.length} />
              <IconText iconClass="money-icon" text={total} />
            </div>
          </div>
          <div className="detail-partners">
            {partnersList}
          </div>
        </div>
      </div>
    );
  }
}

export default DetailChurras;
