// CSS
import 'normalize.css';
import './assets/scss/main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('app'));
registerServiceWorker();
