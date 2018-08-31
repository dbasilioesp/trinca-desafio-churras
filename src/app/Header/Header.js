import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    const headerClass = this.props.isLoggedIn ? '' : 'header--login';

    return (
      <header className={'header text-center bg-primary ' + headerClass}>
        <h1 className="title">Agenda de Churras</h1>
      </header>
    );
  }
}

export default Header;
