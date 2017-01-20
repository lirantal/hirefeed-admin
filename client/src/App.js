import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers/index';
import configureStore from './store/configureStore';
import Axios from 'axios';

/**
 * Import material-ui theme
 */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

/**
 * Import App-specific CSS
 */
import './App.css';

/**
 * Import app page routes
 */
import Sidebar from './Layout/Sidebar';
import Footer from './Layout/Footer';

const store = configureStore();

class App extends Component {

  /**
   * Check if user is authenticated
   */
  checkUserAuth() {
    return localStorage.getItem('isAuth');
  }

  /**
   * Get user details
   */
  getUserDetails() {
    Axios.get('/api/users/me').
      then(function(res) {
        if (!res.data) {
          browserHistory.push('/login');
        } else {
          localStorage.setItem('user', JSON.stringify(res.data));
        }
    }).catch(function(res) {
      browserHistory.push('/login');
    });
  }

  constructor() {
    super();

    if (!this.checkUserAuth()) {
      browserHistory.push('/login');
    }

    this.getUserDetails();

  }

  render() {

    return (
      <Provider store={store}>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)} >
              <div className="container">
                  <div className="row">

                      <div className="col-md-3">
                          <Sidebar />
                      </div>

                      <div className="col-md-9">
                          {this.props.children}
                      </div>
                  </div>

                  <div className="row">

                      <div className="col-md-12">
                          <Footer />
                      </div>
                  </div>

              </div>
          </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
