import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

import App from './App';
import Visitors from './Page/Visitors';
import Login from './Login';
import './index.css';

const Profile = () => {
    return (
      <h1> Company Profile </h1>
    );
};

ReactDOM.render(
  <Router history={browserHistory}>
      <Route path="/" component={App}>
          <IndexRoute component={Visitors}/>
          <Route path="/visitors" component={Visitors}/>
          <Route path="/profile" component={Profile}/>
      </Route>
      <Route path="/login" component={Login}/>
  </Router>
  ,
  document.getElementById('root')
);
