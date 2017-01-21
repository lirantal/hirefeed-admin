import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './App';
import VisitorsContainer from './Page/VisitorsContainer';
import ProfileContainer from './Page/ProfileContainer.js';
import Login from './Login';
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
      <Route path="/" component={App}>
          <IndexRoute component={VisitorsContainer}/>
          <Route path="/visitors" component={VisitorsContainer}/>
          <Route path="/profile" component={ProfileContainer}/>
      </Route>
      <Route path="/login" component={Login}/>
  </Router>
  ,
  document.getElementById('root')
);
