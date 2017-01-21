import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { getVisitors } from '../actions/visitors';
import Visitors from './Visitors';

class VisitorsContainer extends Component {

  constructor(props) {
    super(props);
    this.props.getVisitors();
  }

  render() {

    if (this.props.visitors.length === 0) {
      return (
        <div>
          <h1> Loading ... </h1>
        </div>
      )
    } else {
      return (
        <div>
          <Visitors visitors={this.props.visitors} />
        </div>
      );
    }
  }
}

function mapStateToProps(state, props) {
  return {
    visitors: state.visitors
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getVisitors: bindActionCreators(getVisitors, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VisitorsContainer);