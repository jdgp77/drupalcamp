import React, { Component } from 'react';
import { connect } from 'react-redux';
import Banner from '../../sections/banner/Banner';
import Content from '../../sections/content/Content';
import './Login.scss';
import PropTypes from 'prop-types';
import fire, { providerGoogle } from '../../../config/Fire';
import { setLogin } from '../../../actions';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';

// This import loads the firebase namespace along with all its type information.

class Login extends Component {

  constructor() {
    super();

    this.state = {
      user_or_email: '',
      showPassword: false,
      password: ''
    }
    
    this.handleChangeUserEmail = this.handleChangeUserEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.loginGoogle = this.loginGoogle.bind(this);
    this.createUser = this.createUser.bind(this);
    
    this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
    this.handleMouseDownPassword = this.handleMouseDownPassword.bind(this);
  }

  loginGoogle() {
    this.props.setLogin(true);
    fire.auth().signInWithPopup(providerGoogle)
      .then(result => {
        console.log(result);
      })
  }
  
  createUser() {
    /*
    debugger;
    fire.auth().signInWithEmailAndPassword(this.state.user_or_email, this.state.password).catch(function(error) {
      debugger;
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });

    fire.auth().onAuthStateChanged(function(user) {
      debugger;
      if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        // ...
      } else {
        // User is signed out.
        // ...
      }
    });*/
  }

  handleChangeUserEmail(event) {
    this.setState({
      user_or_email: event.target.value
    });
  }

  handleChangePassword(event) {
    //this.setState({
    //  password: event.target.value
    //});
  }
  
  handleClickShowPassword(event) {
    this.setState({
      showPassword: true
    });
  }
  
  handleMouseDownPassword(event) {
    this.setState({
      showPassword: false
    });
  }

  render() {
    return (
      <section className="login-section" >
        <Banner content={{
          title: 'Iniciar sesión'
        }}></Banner>
        <form className="form-only login-form" >
          <div className="row">
            <div className="input-field col s12">
              <TextField id="standard-basic" label="Nombre de usuario / Correo" />
            </div>
            <div className="input-field col s12">
            <FormControl>
              <InputLabel htmlhtmlFor="standard-adornment-password">Password</InputLabel>
              <Input
                id="standard-adornment-password"
                type={this.state.showPassword ? 'text' : 'password'}
                className="casa"
                onChange={this.handleChangePassword}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={this.handleClickShowPassword}
                      onMouseDown={this.handleMouseDownPassword}
                    >
                      {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            </div>
            <div className="button-area">
            <Button variant="contained" color="primary">
              Enviar
            </Button>
            </div>
          </div>
        </form>
      </section>
    );
  }
}

Login.propTypes = {
  setLogin: PropTypes.func.isRequired,
};
const mapDispatchToPropsActions = dispatch => ({
  setLogin: value => dispatch(setLogin(value))
});
export default connect(null, mapDispatchToPropsActions)(Login);