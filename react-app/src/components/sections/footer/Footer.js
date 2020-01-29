import React, { Component } from 'react';
import './Footer.scss';
import DrupalCampContraste from '../../../images/logos/DrupalCampContraste.png';
import AsociacionDrupalColombiaContraste from '../../../images/logos/LogoAsociacionDrupalColombia-2-EnCurvas-svg.svg';
//import AsociacionDrupalColombia from '../../../images/logos/AsociacionDrupalColombia.png';
import { Link } from 'react-router-dom';

class Footer extends Component {
  constructor() {
    super();
  }

  menus() {
    return (
    <div>
      <div className="col s3">
        <h3>Nosotros...</h3>
        <div>
          <ul>
            <li><a href="">¿Quienes somos?</a></li>
            <li><a href="">Historia</a></li>
            <li><a href="">Valor de las cosas</a></li>
          </ul>
        </div>
      </div>
      <div className="col s3">
        <h3>Contactenos</h3>
        <div>
          <ul>
            <li><a href="">¿Quienes somos?</a></li>
            <li><a href="">Historia</a></li>
            <li><a href="">Valor de las cosas</a></li>
          </ul>
        </div>
      </div>
    </div>);
  }

  render() {
    return (
      <footer className="section-footer">
        <div className="footer-top">
          <div className="row">
            <div className="col s12 m3">
              <div className="information">
                <br/>
                <img src={DrupalCampContraste}  alt="Asociación Drupal Colombia"/>
                <br/>
                <p className="footer-summary">
                  DrupalCamp 2020 <br/> Medellín, Colombia
                </p>
              </div>
            </div>
            <div className="col s12 m3">
              <h3>Evento</h3>
              <ol>
                <li><Link to="/nosotros">El evento</Link></li>
                <li><Link to="/lugar">El lugar</Link></li>
                <li><Link to="/keynote">Keynote</Link></li>
                <li><Link to="/enviar-presentacion">Enviar Charla/taller</Link></li>
              </ol>
            </div>
            <div className="col s12 m3">
              <h3>Información</h3>
              <ol>
                <li><Link to="/politica-de-proteccion-de-datos">Protección de datos</Link></li>
                <li><Link to="/politica-de-tratamiento-de-datos-personales">Tratamiento de datos</Link></li>
                <li><Link to="/codigo-conducta">Codigo de conducta</Link></li>
                {/*<li><Link to="/personas">Mapa de conocimiento</Link></li> */}
              </ol>
            </div>
            <div className="col s12 m3">
              <div className="information">
              <br/>
                Evento creado por:<br/>
                <a href="https://asociaciondrupal.org/" target="_black" ><img className="logo-asociacion" src={AsociacionDrupalColombiaContraste}  alt="Asociación Drupal Colombia"/></a>
                <br/>
                <p className="footer-summary"></p>
              </div>
            </div>
          </div>
          <div className="footer-below">
            
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;