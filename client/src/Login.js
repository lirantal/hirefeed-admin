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

export default class Login extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  doLogin(e) {
      e.preventDefault();
      browserHistory.push('/');
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
        <form action="/" method="POST" onSubmit={this.doLogin.bind(this)}>

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
          <Link to="/"> Go to main page </Link>

        </form>
      </MuiThemeProvider>
    );
  }
}
