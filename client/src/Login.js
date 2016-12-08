import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'

/**
 * Import material-ui theme
 */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import Axios from 'axios';

export default class Login extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  /**
   * User has been successfully authenticated, handle the login
   * @param {object} API server response object
   */
  handleUserLogin(resp) {
    localStorage.setItem('isAuth', true);
    browserHistory.push('/');
  }

  /**
   * User failed authenticating, handle the error
   * @param resp
   */
  handleUserLoginError(resp) {
    this.setState({loginError: resp.message});
  }

  /**
   * Login form submit action
   * @param {object} entity
   */
  handleFormLogin(e) {

    // Prevent the browser from submitting the form so we can make an ajax request
    e.preventDefault();

    // Perform the ajax login request
    Axios.post('/api/auth/signin', {
      "usernameOrEmail": this.state.username,
      "password": this.state.password
    }).then(this.handleUserLogin.bind(this))
      .catch(this.handleUserLoginError.bind(this));

  }

  onUsernameChange(e) {
    this.setState({username: e.target.value});
  }

  onPasswordChange(e) {
    this.setState({password: e.target.value});
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)} >
        <form action="/" method="POST" onSubmit={this.handleFormLogin.bind(this)}>

          <TextField
            hintText="Username"
            value={this.state.username}
            onChange={this.onUsernameChange.bind(this)}
          />

          <TextField
            hintText="Password"
            value={this.state.password}
            onChange={this.onPasswordChange.bind(this)}
          />

          <RaisedButton type="submit" label="Login" primary={true} />

          <br/>
          {this.state.loginError ?
            (
              <div>
                <span>{this.state.loginError}</span>
              </div>
            ) : ''
          }

          <br/>
          <Link to="/"> Go to main page </Link>

        </form>
      </MuiThemeProvider>
    );
  }
}
