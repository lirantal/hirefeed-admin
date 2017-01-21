import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { addProfile } from '../actions/profile';

class ProfileContainer extends Component {

  constructor(props) {
    super(props);

    console.log('state props');
    console.log(this.props);
  }

  handleProfileSubmit = (e) => {
    console.log('called the profile submit button');
    console.log(e);
    var profileObject = {
      name: 'asdas',
      location: '2312'
    };

    this.props.addProfile(profileObject);
  }

  render() {
    return (
      <div>
        <p> hello </p>
        <button onClick={(e) => this.handleProfileSubmit(e)} value="something" name="something" type="button"> Click me </button>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    company: state.company
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addProfile: bindActionCreators(addProfile, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);