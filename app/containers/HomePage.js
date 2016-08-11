import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import Home from '../components/Home';
import * as HomepageActions from '../actions/homepage';

class HomePage extends Component {
  render() {
    return (
      <Home />
    );
  }
}


function mapStateToProps(state) {
  return {
    githubCredentials: state.github
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(HomepageActions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
