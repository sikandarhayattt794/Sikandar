import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './header';
import Footer from './footer';
import footercss from './footer-distributed-with-address-and-phones';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<footercss />, document.getElementById('footercss'));

ReactDOM.render(<Header />, document.getElementById('Header'));
ReactDOM.render(<Footer />, document.getElementById('Footer'));
serviceWorker.unregister();
