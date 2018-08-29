import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Footer from '../Footer/Footer';
import LoginTemplate from '../LoginTemplate/LoginTemplate';
import ListItems from '../ListItems/ListItems';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="grid">
        <div>
          <Router>
            <div>
              <Route exact path="/" component={LoginTemplate} />
              <Route path="/list" component={ListItems} />
            </div>
          </Router>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
