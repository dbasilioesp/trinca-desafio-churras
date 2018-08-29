import React, { Component } from 'react';

import HeaderLogin from '../Headers/HeaderLogin';
import Login from '../Login/Login';

class LoginTemplate extends Component {
  render() {
    return (
      <div>
        <HeaderLogin />
        <main className="container-small">
          <Login />
        </main>
      </div>
    );
  }
}

export default LoginTemplate;
