import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import LoginForm from '../LoginForm/LoginForm';
import ListChurras from '../ListChurras/ListChurras';
import DetailChurras from '../DetailChurras/DetailChurras';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(isLoggedIn) {
    this.setState({ isLoggedIn });
  }

  render() {
    const { isLoggedIn } = this.state;

    const LoginTemplate = (
      <div className="grid-app bg-primary">
        <Header isLoggedIn={isLoggedIn} />
        <main className="container-small">
          <LoginForm onLogin={this.handleLogin} />
        </main>
        <Footer />
      </div>
    )

    const AppTemplate = (
      <div className="grid-app">
        <Header isLoggedIn={isLoggedIn} />
        <main>
          <Router>
            <div>
              <Route exact path="/" component={ListChurras} />
              <Route path="/churras/list" component={ListChurras} />
              <Route path="/churras/detail/:id" component={DetailChurras} />
            </div>
          </Router>
        </main>
        <Footer />
      </div>
    );

    return (
      <div className="h-100-per">
        {isLoggedIn ? AppTemplate : LoginTemplate}
      </div>
    );
  }
}

export default App;
