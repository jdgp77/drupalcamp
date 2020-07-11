import React, { Component } from 'react';
import './Footer.scss';
import jGet from '../../../services/conectapi';
import DrupalCampContraste from '../../../images/logos/DrupalCampContraste.png';
import instagram from '../../../images/redes/instagram.png';
import facebook from '../../../images/redes/facebook.png';
import twitter from '../../../images/redes/twitter.png';
import AsociacionDrupalColombiaContraste from '../../../images/logos/LogoAsociacionDrupalColombia-2-EnCurvas-svg.svg';
//import AsociacionDrupalColombia from '../../../images/logos/AsociacionDrupalColombia.png';
import { Link } from 'react-router-dom';

class Footer extends Component {
  constructor() {
    super();

    this.state = {
      menu : [
        {
        "key": "standard.front_page",
        "title": "Inicio.",
        "description": "",
        "uri": "",
        "alias": "",
        "external": false,
        "absolute": "https://back.drupalcamp.co/",
        "relative": "/",
        "existing": true,
        "weight": "-50",
        "expanded": false,
        "enabled": true,
        "uuid": null,
        "options": []
        },
        {
        "key": "d7955bd8-600c-4f4e-aae1-ba35697e7e3f",
        "title": "Envia una Charla/Taller",
        "description": null,
        "uri": "node/21",
        "alias": "enviar-presentacion",
        "external": false,
        "absolute": "https://back.drupalcamp.co/enviar-presentacion",
        "relative": "/enviar-presentacion",
        "existing": true,
        "weight": "-49",
        "expanded": false,
        "enabled": true,
        "uuid": "215db78a-e045-47ac-87fd-7b2ad02ac737",
        "options": []
        },
        {
        "key": "71732162-5f2a-454a-80fb-42708bb85ca2",
        "title": "Agenda",
        "description": null,
        "uri": "node/30",
        "alias": "agenda",
        "external": false,
        "absolute": "https://back.drupalcamp.co/agenda",
        "relative": "/agenda",
        "existing": true,
        "weight": "-48",
        "expanded": false,
        "enabled": true,
        "uuid": "bf06346b-840e-47a3-a7da-0be74847fd8d",
        "options": []
        },
        {
        "key": "c2d527ab-fea4-496b-9bfb-e6f64e2e91ce",
        "title": "Lugar",
        "description": null,
        "uri": "node/20",
        "alias": "lugar",
        "external": false,
        "absolute": "https://back.drupalcamp.co/lugar",
        "relative": "/lugar",
        "existing": true,
        "weight": "-46",
        "expanded": false,
        "enabled": true,
        "uuid": "0f52b211-999a-47fa-88d6-a5f5d339d8a6",
        "options": []
        },
        {
        "key": "f4d5dc57-0d2d-41f3-b12f-98fa88407bd8",
        "title": "Keynote",
        "description": null,
        "uri": "node/24",
        "alias": "keynote",
        "external": false,
        "absolute": "https://back.drupalcamp.co/keynote",
        "relative": "/keynote",
        "existing": true,
        "weight": "-45",
        "expanded": false,
        "enabled": true,
        "uuid": "27e80407-ff83-4895-9a17-10d33de5bc0a",
        "options": []
        },
        {
        "key": "1041b84b-29db-4760-b049-03bf2209c619",
        "title": "Comprar entrada",
        "description": "principal",
        "uri": "https://www.ticketopolis.com/drupalcolombia/",
        "alias": null,
        "external": true,
        "absolute": "https://www.ticketopolis.com/drupalcolombia/",
        "relative": "https://www.ticketopolis.com/drupalcolombia/",
        "existing": true,
        "weight": "0",
        "expanded": false,
        "enabled": true,
        "uuid": null,
        "options": {
        "external": true
          }
        },
      ],

      menu2 : [
        {
          "key": "15421f54-35dc-4b06-89aa-c71622f80766",
          "title": "Protección de datos",
          "description": null,
          "uri": "node/15",
          "alias": "politica-de-proteccion-de-datos",
          "external": false,
          "absolute": "https://back.drupalcamp.co/politica-de-proteccion-de-datos",
          "relative": "/politica-de-proteccion-de-datos",
          "existing": true,
          "weight": "-50",
          "expanded": false,
          "enabled": true,
          "uuid": "f7767379-5d46-4a2b-8c45-a55e95dd8349",
          "options": []
          },
          {
          "key": "398826a8-4fe3-4311-a8ef-0d2dbf17c442",
          "title": "Código de conducta",
          "description": null,
          "uri": "node/16",
          "alias": "codigo-conducta",
          "external": false,
          "absolute": "https://back.drupalcamp.co/codigo-conducta",
          "relative": "/codigo-conducta",
          "existing": true,
          "weight": "-49",
          "expanded": false,
          "enabled": true,
          "uuid": "9e29c9f2-550a-4266-a9d1-bfc5e6f10a17",
          "options": []
          }
      ]
    }


  }

  componentDidMount() {

    jGet({
      url: '/api/menu_items/main',
      withToken: true,
      then: (result) => {
       
        this.setState({...this.state, ...{menu: result} });
        //this.setState({ tituloGeneral : 'casa' });

      },
      err: (result) => {
        debugger;
      }
    });

    jGet({
      url:'/api/menu_items/about-us',
      withToken: true,
      then: (result) => {
        this.setState({...this.state, ...{menu2: result} });
        
      },
      err: (result) => {
        debugger;
        
      }
    });
  }

  getLinks (){
    let api = this.state.menu;  
    return api.map(function(item , index){
      if ( item.title)  {
        return (<li key={index}><a href = {item.relative} >{item.title}</a></li>);
      }
    });
  }

  getLinksInfo() {
    let info = this.state.menu2;
    return info.map(function(item , index){
      return (<li key = {index}><a href = {item.relative}>{item.title}</a></li>);
    });
  }
  
  render() {
    return (
      <footer className="section-footer">
        { this.state.tituloGeneral}
        <div className="footer-top">
          <div className="row">
            <div className="col s12 m3">
              <div className="information">
                <br/>
                <img src={DrupalCampContraste}  alt="Asociación Drupal Colombia"/>
                <br/>
                <p className="footer-summary">
                  DrupalCamp Virtual<br/> Colombia 2020
                </p>
              </div>
            </div>
            <div className="col s12 m3">
              <h3>Evento</h3>
              <ol>
                {this.getLinks()}
              </ol>
            </div>
            <div className="col s12 m3">
              <h3>Información</h3>
              <ol>
                {this.getLinksInfo()}
                {/*<li><Link to="/personas">Mapa de conocimiento</Link></li> */}
              </ol>
            </div>

            <div className="col s12 m3">
              <div className="information">
              <br/>
                Evento creado por:<br/>
                <a href="https://asociaciondrupal.org/" target="_black" ><img className="logo-asociacion" src={AsociacionDrupalColombiaContraste}  alt="Asociación Drupal Colombia"/></a>
                <br/>
                <ul className="footer-redes">
                  <li><a href="https://www.facebook.com/DrupalColombia" target="_black"><img src={facebook}  alt="facebook"/></a></li>
                  <li><a href="https://twitter.com/drupalco" target="_black"><img src={twitter}  alt="twitter"/></a></li>
                  <li><a href="https://www.instagram.com/drupalco/" target="_black"><img src={instagram}  alt="instagram"/></a></li>
                </ul>
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