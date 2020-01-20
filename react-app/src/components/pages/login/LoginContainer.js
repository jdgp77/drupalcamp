import React, { Component } from 'react';
import { connect } from 'react-redux';
import Banner from '../../sections/banner/Banner';
import Content from '../../sections/content/Content';
import './Login';
import PropTypes from 'prop-types';
import fire, { providerGoogle } from '../../../config/Fire';
import { setCity } from '../../../actions';
// This import loads the firebase namespace along with all its type information.

class LoginContainer extends Component {


  constructor() {
    super();
    this.state = {
      user_or_email: '',
      password: ''
    }
    
    this.loginGoogle = this.loginGoogle.bind(this);
  }

  loginGoogle() {
    this.props.setCity('Bogota');
    fire.auth().signInWithPopup(providerGoogle)
      .then(result => {
        console.log(result);
      })
  }

  render() {
    return (
      <Login/>
    )
  }
}

LoginContainer.propTypes = {
  setCity: PropTypes.func.isRequired,
};
const mapDispatchToPropsActions = dispatch => ({
  setCity: value => dispatch(setCity(value))
});
export default connect(null, mapDispatchToPropsActions)(LoginContainer);