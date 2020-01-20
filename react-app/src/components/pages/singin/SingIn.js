import React, { Component } from 'react';
import Banner from '../../sections/banner/Banner';
import Content from '../../sections/content/Content';
import './Login.scss';
import fire from '../../../config/Fire';
// This import loads the firebase namespace along with all its type information.

class Login extends Component {


  constructor() {
    super();
    this.state = {
      user_or_email: '',
      password: ''
    }

    this.handleChangeUserEmail = this.handleChangeUserEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.createUser = this.createUser.bind(this);
  }

  createUser() {
    fire.auth().createUserWithEmailAndPassword(this.state.user_or_email, this.state.password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }

  handleChangeUserEmail(event) {
    this.setState({
      user_or_email: event.target.value
    });
  }

  handleChangePassword(event) {
    this.setState({
      password: event.target.value
    });
  }

  render() {
    return (
      <div>
        <Banner content={{
          title: 'Iniciar sesión'
        }}></Banner>
        <form className="form-only login-form" >
          <div className="row">
            <div className="input-field col s12">
              <input id="first_name" value={this.state.user_or_email} onChange={this.handleChangeUserEmail} type="text" className="validate" />
              <label for="first_name">Nombre de usuario / Correo</label>
            </div>
            <div className="input-field col s12">
              <input id="last_name" value={this.state.password} onChange={this.handleChangePassword} type="password" className="validate" />
              <label for="last_name">Contraseña:</label>
            </div>
            <div className="button-area">
              <button className="waves-effect waves-light btn" onClick={this.createUser} >Enviar</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;