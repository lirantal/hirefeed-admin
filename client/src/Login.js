import React, { Component } from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'

export default class Login extends Component {

    doLogin(e) {
        e.preventDefault();
        browserHistory.push('/');
    }

  render() {
    return (
      <form>

          Username:
        <input type="text" name="username" />

          Password:
        <input type="text" name="password" />

            Submit
        <input type="submit" value="Login" onClick={this.doLogin.bind(this)} />

          <br/>

          <Link to="/"> Go to main page </Link>
      </form>
    );
  }
}
