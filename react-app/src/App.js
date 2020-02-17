import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/pages/home/Home';
import Header from './components/sections/header/Header';
import Footer from './components/sections/footer/Footer';
import Voluntario from './components/pages/voluntario/Voluntario';
import Tutorial from './components/pages/tutorial/Tutorial';
import Courses from './components/pages/courses/Courses';
import Course from './components/pages/course/Course';
import './App.scss';
import TutorialsGroup from './components/pages/tutorials-group/TutorialsGroup';
import Login from './components/pages/login/Login';
import ReactGA from 'react-ga';
import Tutorials from './components/pages/tutorials/Tutorials';
// This import loads the firebase namespace along with all its type information.
import * as firebase from 'firebase/app';
import Nosotros from './components/pages/nosotros/Nosotros';
import Search from './components/pages/search/Search';
import TratamientoDatosPersonales from './components/pages/tratamiento-datos-personales/TratamientoDatosPersonales';
import ProteccionDatos from './components/pages/proteccion-datos/ProteccionDatos';
import PaginaBasica from './components/pages/pagina-basica/PaginaBasica';
import Lugar from './components/pages/lugar/Lugar';
import InformacionConferencistas from './components/pages/InformacionConferencistas/InformacionConferencistas';
import EnviarPresentacion from './components/pages/EnviarPresentacion/EnviarPresentacion';
import CodigoConducta from './components/pages/CodigoConducta/CodigoConducta';
import Agenda from './components/pages/agenda/Agenda';
import Keynote from './components/pages/keynote/Keynote';

const trackingId = "UA-1234567890-1"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);

class App extends Component {

  constructor() {
    super();
    this.state = {
      title: 'DrupalCamp - Colombia',
      description: 'Un evento único en Colombia, creado por la comunidad para compartir conocimiento enfocado en Drupal.'
    };
  }

  componentDidMount() {
    fetch(process.env.REACT_APP_URLBACK + '/jsonapi/block_content/basic/ee093510-da58-4fe4-8b25-83c72444806d')
      .then(response => response.json())
      .then(res => {
        this.setState({
          title: res.data.attributes.info,
          description: res.data.attributes.body.value
        });
      });
      console.log('preproces', process.env.REACT_APP_URLBACK); // dev
  }

  render () {
    var title = this.state.title;
    var description = this.state.description;

    return (
      <div className="App">
        <Router>
          <Header></Header>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/voluntario" component={Voluntario} />
              <Route exact path="/cursos" component={Courses} />
              <Route exact path="/cursos/:curso" component={Course} />
              <Route exact path="/grupo-de-tutoriales/:id" component={TutorialsGroup} />
              <Route exact path="/tutoriales/:id" component={Tutorial} />
              <Route exact path="/tutoriales" component={Tutorials} />
              <Route exact path="/iniciar-sesion" component={Login} />
              <Route exact path="/nosotros" component={Agenda} />
              <Route exact path="/lugar" component={Lugar} />
              <Route exact path="/politica-de-proteccion-de-datos" component={ProteccionDatos} />
              <Route exact path="/politica-de-tratamiento-de-datos-personales" component={TratamientoDatosPersonales} />
              <Route exact path="/enviar-presentacion" component={EnviarPresentacion} />
              <Route exact path="/codigo-conducta" component={CodigoConducta} />
              <Route exact path="/informacion-conferencistas" component={InformacionConferencistas} />
              <Route exact path="/busqueda" component={Search} />
              <Route exact path="/agenda" component={Agenda} />
              <Route exact path="/keynote" component={Keynote} />
              <Route exact path="/:paginabasica" component={PaginaBasica} />
            </Switch>
          </div>
          <Footer></Footer>
        </Router>
      </div>
    );
  }
}

export default App;
