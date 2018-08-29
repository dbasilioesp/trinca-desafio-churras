import React, { Component } from 'react';
import HeaderLogin from '../Headers/HeaderLogin';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="grid">
        <div>
          <HeaderLogin />
          <main className="container-small">
            <Login />
          </main>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
