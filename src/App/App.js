import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="grid">
        <div>
          <header className="header-login text-center">
            <h1 className="title">Agenda de Churras</h1>
          </header>
          <main className="container-small">
            <div id="section-login">
              <form>
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
          </main>
        </div>
        <footer className="footer">
          <div className="logo">
            <div className="trinca-logo"></div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
