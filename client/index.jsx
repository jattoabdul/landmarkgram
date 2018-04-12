import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes/Routes';
// import App from './components/App.jsx';
import './assets/stylesheets/styles.scss';

render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);
