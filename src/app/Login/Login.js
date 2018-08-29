import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div id="section-login">
        <form action="/list">
          <div className="form-input">
            <label for="email">Login</label>
            <input id="email" type="email" placeholder="email" />
          </div>
          <div className="form-input">
            <label for="password">Senha</label>
            <input id="password" type="password" placeholder="senha" />
          </div>
          <div className="form-submit">
            <button type="submit" className="button-submit w-100-per">
              Entrar
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
