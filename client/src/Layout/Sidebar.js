import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Sidebar extends Component {
    render() {
        return (
          <div>
              Sidebar nav
              <div>
                  <ul>
                      <li>
                          <Link to="/">Home</Link>
                      </li>
                      <li>
                          <Link to="/visitors">Visitors</Link>
                      </li>
                      <li>
                          <Link to="/profile">Profile</Link>
                      </li>
                  </ul>
              </div>
          </div>
        );
    }
}