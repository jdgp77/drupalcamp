import React, { Component } from 'react';
import './FormContact.scss';
import jGet, { jPost } from '../../../services/conectapi';


class FormContact extends Component {

  constructor() {
    super();
    this.state = {
      title: 'Recibe Información-',
      description: 'Al registrarte en el evento podrás recibir información.'
    };

    setTimeout(() => {
      var elems = document.querySelectorAll('.modal');
      //var instances = window.M.Modal.init(elems);
    }, 0);
  }

  componentDidMount() {
    debugger;
    jGet({
      url: '/jsonapi/webform/webform/cbd7a5b5-d113-48ee-86dc-55a38a5d4d2a?fields[webform--webform]=title,description',
      withToken: true,
      then: (result) => {
        this.setState({
          title: result.data.attributes.title,
          description: result.data.attributes.description
        });
      },
      err: (result) => {

      }
    });
  }

  handleClick(e) {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    var data = JSON.stringify({
      webform_id: 'suscribirse',
      name: name,
      email: email
    });

    jPost({
      url: '/webform_rest/submit?_format=json',
      data: data,
      then: (result) => {
        if (result.error) {
          if (result.error.name) {
            window.M.toast({ html: 'Error nombre: ' + result.error.name });
          }
          if (result.error.email) {
            window.M.toast({ html: 'Error correo: ' + result.error.email });
          }
        }
        else {
          window.M.toast({ html: 'Enviado Correctamente' });
          document.getElementById('name').value = '';
          document.getElementById('email').value = '';
        }
      },
      err: (result) => {
        console.log(result);
        window.M.toast({ html: 'Lo sentimos, pero no podemos completar el proceso de suscripción ahora.' });
      }
    });
  }

  render () {
    var title = this.state.title;
    var description = this.state.description;
    var handleClick = this.handleClick;

    return (
      <div className="block form-contact" id="recibe-informacion" >
        <div>
          <h2 className="dc line-bottom">{title}</h2>
          <span className="subtitle paragraph" dangerouslySetInnerHTML={{__html: description }}></span>
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12 m6">
                <input required id="name" type="text" className="validate" />
                <label for="name">Nombre*</label>
              </div>
              <div className="input-field col s12 m6">
                <input required id="email" type="email" className="validate" />
                <label for="email">Correo*</label>
              </div>
            </div>
            <div className="row">
              <label className="terminos">
                <input required type="checkbox" className="filled-in" />
                {/* <span>He leído y acepto las <a className="modal-trigger" href="#modal1">politicas de uso.</a></span> */}
              </label>
            </div>
            <div className="button-area">
              <a className="waves-effect waves-light btn" onClick={handleClick} >Enviar</a>
            </div>
          </form>
          <div id="modal1" className="modal">
            <div className="modal-content">
              <h4>Política de uso de datos</h4>
              <p>Estos datos se utilizaran como lista de correo para dar información del evento o similares.</p>
            </div>
            <div className="modal-footer">
              <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FormContact;