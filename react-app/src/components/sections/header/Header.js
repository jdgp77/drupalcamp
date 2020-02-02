import React, { Component } from 'react';
import DrupalCamp from '../../../images/logos/DrupalCamp.png';
import './Header.scss';
import jGet from '../../../services/conectapi';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      login: false,
      menu: [
        {
          title: 'INICIO',
          link: '/'
        },
        {
          title: 'ENVIAR CHARLA/TALLER',
          link: '/enviar-presentacion'
        },
        {
          title: 'EVENTO',
          link: '/nosotros'
        },
        {
          title: 'LUGAR',
          link: '/lugar'
        },
        {
          title: 'KEYNOTE',
          link: '/keynote'
        }
      ]
    }
  }

  componentDidMount() {
    var elem = document.querySelector(".sidenav");
    
    window.M.Sidenav.init(elem, {
        edge: "left",
        inDuration: 250
    });

    // Inspired in https://stackoverflow.com/questions/54595661/materialize-fixed-sidebar-close
    let sidevars = document.querySelectorAll(".sidenav li a");
    for (var i = 0 ; i < sidevars.length ; i++) {
      var sidevar = sidevars[i];

      sidevar.addEventListener("click", function() {
        var elem = document.querySelector(".sidenav");
        var instance = window.M.Sidenav.getInstance(elem);
  
        instance.close();
      });
    }
    jGet({
      url: '/api/menu_items/main',
      withToken: true,
      then: (result) => {
        let linksMenu = [];
        let bnUpdateState = false;
        for (let numData in result) {
          let data = result[numData];
          linksMenu[linksMenu.length] = {
            title: data.title,
            link: data.relative
          }
          bnUpdateState = true;
        }
        if (bnUpdateState) {
          this.setState({
            menu: linksMenu
          });
        }
      },
      err: (result) => {
        debugger;
      }
    });
  }

  getLinks() {
    let menu = this.state.menu;
/*
    if (this.props.login) {
      menu.push({
          title: 'CERRAR SESIÓN',
          link: '/iniciar-sesion'
        });
    }
    else {
      menu.push({
          title: 'INICIAR SESIÓN',
          link: '/iniciar-sesion'
        });
    }
 */  
    return menu.map(function(item, index) {
      return <li key={index} ><Link to={item.link}>{item.title}</Link></li>
    });
  }

  render () {

    return (
      <header className="section header" >
        <nav>
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">
              <img src={DrupalCamp} alt="Logo DrupalCamp Colombia Medellin 2020" height="150" />
            </a>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              {this.getLinks()}
            </ul>
          </div>
        </nav>
        <ul className="sidenav" id="mobile-demo">
          {this.getLinks()}
        </ul>
      </header>
    );
  }
}

Header.propTypes = {
  login: PropTypes.bool.isRequired,
};
const mapStateToProps = state => ({ login: state.login });
export default connect(mapStateToProps, null)(Header);