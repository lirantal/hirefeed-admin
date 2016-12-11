import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './App';
import VisitorsContainer from './Page/VisitorsContainer';
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
          <IndexRoute component={VisitorsContainer}/>
          <Route path="/visitors" component={VisitorsContainer}/>
          <Route path="/profile" component={Profile}/>
      </Route>
      <Route path="/login" component={Login}/>
  </Router>
  ,
  document.getElementById('root')
);
