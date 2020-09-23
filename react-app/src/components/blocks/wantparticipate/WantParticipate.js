import React, { Component } from 'react';
import './WantParticipate.scss'
import ImageWantParticipate from '../../../images/Participate/WantParticipate.png';
import { Link } from 'react-router-dom';

class WantParticipate extends Component {
  constructor() {
    super();
  }

  render () {

    return (
      <div className="block want-participate" id="block-want-participate">
        <div className="content" >
          <div className="row">
            <div className="col s12 l5 image">
              <img src={ImageWantParticipate} alt="¿Quieres participar?"/>
            </div>
            <div className="col s1"></div>
            <div className="col s12 l6">
              <h2 className="dc line-bottom left" >Quieres participar</h2>
              <div className="paragraph" >
                <p>Escuchamos propuestas para quienes quieren participar.</p>
                <Link to="/enviar-presentacion" className="waves-effect waves-light btn" >Quiero participar</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WantParticipate;