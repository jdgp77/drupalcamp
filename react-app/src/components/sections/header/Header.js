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
      menu: [],
      default: [
        {
          title: 'Talleres',
          relative: '/live-dia1',
          key: 'abcd-workshop',
          description: 'principal',
          on: [
            'showWorkshop'
          ],
        },{
          title: 'Conferencias',
          relative: '/live-dia2',
          key: 'abcd-conferences-room1',
          on: [
            'showConferences'
          ],
        },{
          title: 'Conferencias Salón 2',
          relative: '/live-dia2-salon2',
          key: 'abcd-conferences-room2',
          on: [
            'showConferences',
            'showSelection'
          ],
        },
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
  

    let this__ = this;
    var starCountRef = window.fireDatabase.ref('live/day/showWorkshop');
    starCountRef.on('value', function(snapshot) {
      this__.setState({
        ...this__.state, showWorkshop: snapshot.val()
      });
    });
    var starCountRef = window.fireDatabase.ref('live/day/showConferences');
    starCountRef.on('value', function(snapshot) {
      this__.setState({
        ...this__.state, showConferences: snapshot.val()
      });
    });
    var starCountRef = window.fireDatabase.ref('live/rooms/showSelection');
    starCountRef.on('value', function(snapshot) {
      this__.setState({
        ...this__.state, showSelection: snapshot.val()
      });
    });
  }
  
  getLinks = (menu) => {
    return menu.map((item, index) => {
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
            { item.below ? this.getLinksUl(item.below) : ''}
          </li>
        );
      } else {
        return (
          <li key={index} >
            <Link to={item.relative}>{item.title}</Link>
            { item.below ? this.getLinksUl(item.below) : ''}
          </li>
        );
      }
    })
  }

  getLinksUl = (menu) => {
    return (
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        {this.getLinks(menu)}
      </ul>
    );
  }
  

  render() {
    let menu = this.state.menu;
    let newDefault = [];

    for (let i in this.state.default) {
      let letNewLink = { ...this.state.default[i] };
      let title = letNewLink.title + '';
      let flHavePermission = true;
      for (let j in letNewLink.on) {
        if (this.state[letNewLink.on[j]] !== true) {
          flHavePermission = false;
        }
      }
      if (flHavePermission) { 
        if (letNewLink.key == 'abcd-conferences-room1') {
          if (this.state.showSelection) {
            letNewLink.title = title + ' Salón 1';
          }
        }
        newDefault[newDefault.length] = letNewLink;
      }
    }
    menu = menu.concat(newDefault);

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

            {this.getLinksUl(menu)}
          </div>
        </nav>
        <ul className="sidenav" id="mobile-demo">
          {this.getLinks(menu)}
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
