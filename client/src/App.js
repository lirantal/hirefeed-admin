import React, { Component } from 'react';

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

class App extends Component {

  render() {

    return (
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
    );
  }
}

export default App;
