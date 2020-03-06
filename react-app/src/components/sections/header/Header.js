import React, { Component } from "react";
import DrupalCamp from "../../../images/logos/DrupalCamp.png";
import "./Header.scss";
import jGet from "../../../services/conectapi";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor() {
    super();

    this.state = {
      login: false,
      menu: [
        {
          key: "standard.front_page",
          title: "Inicio",
          description: "",
          uri: "",
          alias: "",
          external: false,
          absolute: "http://localhost:10080/",
          relative: "/",
          existing: true,
          weight: "-49",
          expanded: false,
          enabled: true,
          uuid: null,
          options: [],
          example: true,
          below: [
            {
              key: "ac3fc9aa-1a89-436c-a9b1-15cd8e81c245",
              title: "enlace_1",
              description: null,
              uri: "node/4",
              alias: "tutoriales/es-un-hecho",
              external: false,
              absolute: "http://localhost:10080/tutoriales/es-un-hecho",
              relative: "/tutoriales/es-un-hecho",
              existing: true,
              weight: "-50",
              expanded: false,
              enabled: true,
              uuid: "5a604b02-1af1-4757-955f-a072ff2ea7d9",
              options: []
            },
            {
              key: "4840dfb4-d951-4fdc-a0b4-1075a0bc9d85",
              title: "enlace_2",
              description: null,
              uri: "node/10",
              alias: "node/10",
              external: false,
              absolute: "http://localhost:10080/node/10",
              relative: "/node/10",
              existing: true,
              weight: "-49",
              expanded: false,
              enabled: true,
              uuid: "e6449181-04bc-4e57-9f6e-92a95f758f19",
              options: []
            },
            {
              key: "26bf8b0d-4219-405d-8831-8e419d28bf1e",
              title: "enlace_3",
              description: null,
              uri: "node/2",
              alias: "node/2",
              external: false,
              absolute: "http://localhost:10080/node/2",
              relative: "/node/2",
              existing: true,
              weight: "-48",
              expanded: false,
              enabled: true,
              uuid: "7c20d17a-06bf-4289-b58f-34f4edff7fcf",
              options: []
            }
          ]
        },
        {
          key: "d7955bd8-600c-4f4e-aae1-ba35697e7e3f",
          title: "Envia una Charla/Taller_",
          description: null,
          uri: "node/21",
          alias: "enviar-presentacion",
          external: false,
          absolute: "http://localhost:10080/enviar-presentacion",
          relative: "/enviar-presentacion",
          existing: true,
          weight: "-48",
          expanded: false,
          enabled: true,
          uuid: "215db78a-e045-47ac-87fd-7b2ad02ac737",
          options: [],
          below: [
            {
              key: "985ef63d-1506-4612-a20b-c28edd34d067",
              title: "link_1",
              description: null,
              uri: "node/6",
              alias: "cursos/acquia-certificado-site-builder",
              external: false,
              absolute:
                "http://localhost:10080/cursos/acquia-certificado-site-builder",
              relative: "/cursos/acquia-certificado-site-builder",
              existing: true,
              weight: "-50",
              expanded: false,
              enabled: true,
              uuid: "0181771a-629b-4ae2-a877-3288efa65115",
              options: []
            },
            {
              key: "1e333aa1-2e27-4559-95fb-8d616dd1f8fd",
              title: "link_2",
              description: null,
              uri: "node/24",
              alias: "keynote",
              external: false,
              absolute: "http://localhost:10080/keynote",
              relative: "/keynote",
              existing: true,
              weight: "-49",
              expanded: false,
              enabled: true,
              uuid: "27e80407-ff83-4895-9a17-10d33de5bc0a",
              options: []
            },
            {
              key: "27b94728-0049-4af9-b098-54dbaf7b2cbc",
              title: "link_3",
              description: null,
              uri: "node/5",
              alias: "node/5",
              external: false,
              absolute: "http://localhost:10080/node/5",
              relative: "/node/5",
              existing: true,
              weight: "-48",
              expanded: false,
              enabled: true,
              uuid: "717b1706-6c4e-4a02-9bcc-a8b9f454a4a5",
              options: []
            }
          ]
        },
        {
          key: "6ebd8c6d-4c75-4cb0-aca5-dc9e2373a920",
          title: "Evento",
          description: null,
          uri: "node/14",
          alias: "nosotros",
          external: false,
          absolute: "http://localhost:10080/nosotros",
          relative: "/nosotros",
          existing: true,
          weight: "-47",
          expanded: false,
          enabled: true,
          uuid: "41fee51b-1677-4616-bfeb-ecbb3592d4d8",
          options: [],
          below: [
            {
              key: "6d173693-7df3-4657-8d6c-b09cc19e7a87",
              title: "page_1",
              description: null,
              uri: "node/16",
              alias: "codigo-conducta",
              external: false,
              absolute: "http://localhost:10080/codigo-conducta",
              relative: "/codigo-conducta",
              existing: true,
              weight: "-50",
              expanded: false,
              enabled: true,
              uuid: "9e29c9f2-550a-4266-a9d1-bfc5e6f10a17",
              options: []
            },
            {
              key: "dd957f07-7dfe-4dfe-aa4b-7db73b1582cb",
              title: "page_2",
              description: null,
              uri: "node/21",
              alias: "enviar-presentacion",
              external: false,
              absolute: "http://localhost:10080/enviar-presentacion",
              relative: "/enviar-presentacion",
              existing: true,
              weight: "-49",
              expanded: false,
              enabled: true,
              uuid: "215db78a-e045-47ac-87fd-7b2ad02ac737",
              options: []
            },
            {
              key: "f74f1b15-cae3-4084-ac6e-1bb01aa62d41",
              title: "page_3",
              description: null,
              uri: "node/18",
              alias: "prueba",
              external: false,
              absolute: "http://localhost:10080/prueba",
              relative: "/prueba",
              existing: true,
              weight: "-48",
              expanded: false,
              enabled: true,
              uuid: "1e35b3d6-fc93-42e9-8867-da0fd7c49d72",
              options: []
            }
          ]
        },
        {
          key: "c2d527ab-fea4-496b-9bfb-e6f64e2e91ce",
          title: "Lugar",
          description: null,
          uri: "node/20",
          alias: "lugar",
          external: false,
          absolute: "http://localhost:10080/lugar",
          relative: "/lugar",
          existing: true,
          weight: "-46",
          expanded: false,
          enabled: true,
          uuid: "0f52b211-999a-47fa-88d6-a5f5d339d8a6",
          options: [],
          below: [
            {
              key: "96122d30-1451-46a0-b578-805e414a4a2d",
              title: "enlace_pagina_1",
              description: null,
              uri: "node/7",
              alias: "cursos/acquia-certified-developer",
              external: false,
              absolute:
                "http://localhost:10080/cursos/acquia-certified-developer",
              relative: "/cursos/acquia-certified-developer",
              existing: true,
              weight: "-50",
              expanded: false,
              enabled: true,
              uuid: "ceb8771a-7b4c-4efa-b24e-b797ddb66b8d",
              options: []
            },
            {
              key: "59a0be6d-085c-4333-a622-9a215809c530",
              title: "enlace_pagina_2",
              description: null,
              uri: "node/14",
              alias: "nosotros",
              external: false,
              absolute: "http://localhost:10080/nosotros",
              relative: "/nosotros",
              existing: true,
              weight: "-49",
              expanded: false,
              enabled: true,
              uuid: "41fee51b-1677-4616-bfeb-ecbb3592d4d8",
              options: []
            },
            {
              key: "55bedd05-0573-464e-8bc9-be180f3d9499",
              title: "enlace_pagina_3",
              description: null,
              uri: "node/17",
              alias: "mision-vision",
              external: false,
              absolute: "http://localhost:10080/mision-vision",
              relative: "/mision-vision",
              existing: true,
              weight: "-48",
              expanded: false,
              enabled: true,
              uuid: "b225aeda-376c-4453-8974-e21ba40580fb",
              options: []
            }
          ]
        },
        {
          key: "f4d5dc57-0d2d-41f3-b12f-98fa88407bd8",
          title: "Keynote",
          description: null,
          uri: "node/24",
          alias: "keynote",
          external: false,
          absolute: "http://localhost:10080/keynote",
          relative: "/keynote",
          existing: true,
          weight: "-45",
          expanded: false,
          enabled: true,
          uuid: "27e80407-ff83-4895-9a17-10d33de5bc0a",
          options: [],
          below: [
            {
              key: "b472f185-3b9f-424d-8236-8338e54777df",
              title: "hyperlink_1",
              description: null,
              uri: "node/11",
              alias: "grupo-de-tutoriales/pagina-drupal-complejidad-media",
              external: false,
              absolute:
                "http://localhost:10080/grupo-de-tutoriales/pagina-drupal-complejidad-media",
              relative: "/grupo-de-tutoriales/pagina-drupal-complejidad-media",
              existing: true,
              weight: "-50",
              expanded: false,
              enabled: true,
              uuid: "dd47cd0e-6cd6-4294-8ba3-b8b43b0724a2",
              options: []
            },
            {
              key: "cd0d048b-c6c2-414a-ab82-65fc5d75b550",
              title: "hyperlink_2",
              description: null,
              uri: "node/29",
              alias: "tutoriales/configurar-vscode-para-react",
              external: false,
              absolute:
                "http://localhost:10080/tutoriales/configurar-vscode-para-react",
              relative: "/tutoriales/configurar-vscode-para-react",
              existing: true,
              weight: "-49",
              expanded: false,
              enabled: true,
              uuid: "775a6d3e-6848-46c0-b3db-9bdf1880c9de",
              options: []
            },
            {
              key: "d456b10f-edb5-4129-8743-f8f0089680d7",
              title: "hyperlink_3",
              description: null,
              uri: "node/12",
              alias: "volutarios",
              external: false,
              absolute: "http://localhost:10080/volutarios",
              relative: "/volutarios",
              existing: true,
              weight: "-48",
              expanded: false,
              enabled: true,
              uuid: "262b6f1f-57a5-44f9-bde2-e82620e24e79",
              options: []
            }
          ]
        }
      ]
    };
  }

  componentDidMount() {
    var elem = document.querySelector(".sidenav");

    window.M.Sidenav.init(elem, {
      edge: "left",
      inDuration: 250
    });

    // Inspired in https://stackoverflow.com/questions/54595661/materialize-fixed-sidebar-close
    let sidevars = document.querySelectorAll(".sidenav li a");
    for (var i = 0; i < sidevars.length; i++) {
      var sidevar = sidevars[i];

      sidevar.addEventListener("click", function() {
        var elem = document.querySelector(".sidenav");
        var instance = window.M.Sidenav.getInstance(elem);

        instance.close();
      });
    }
    jGet({
      url: "/api/menu_items/main",
      withToken: true,
      then: result => {
        console.log("jget", result);
        this.setState({
          menu: result
        });
      },
      err: result => {
        debugger;
      }
    });
  }

  getLinks = (menu) => {
    return (
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        {menu.map((item, index) => {
          let myClassName = "";
          if (item.description && item.description == "principal") {
            myClassName = "principal";
          }
          if (item.external) {
            return (
              <li key={index}>
                <a className={myClassName} href={item.relative}>
                  {item.title}
                </a>
                { item.below ? this.getLinks(item.below) : ''}
              </li>
            );
          } else {
            return (
              <li key={index} >
                <Link to={item.relative}>{item.title}</Link>
                { item.below ? this.getLinks(item.below) : ''}
              </li>
            );
          }
        })}
      </ul>
    );
  }

  render() {
    return (
      <header className="section header">
        <nav>
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">
              <img
                src={DrupalCamp}
                alt="Logo DrupalCamp Colombia Medellin 2020"
                height="150"
              />
            </a>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>

            {this.getLinks(this.state.menu)}
          </div>
        </nav>
        <ul className="sidenav" id="mobile-demo">
          {this.getLinks(this.state.menu)}
        </ul>
      </header>
    );
  }
}

Header.propTypes = {
  login: PropTypes.bool.isRequired
};
const mapStateToProps = state => ({ login: state.login });
export default connect(mapStateToProps, null)(Header);
