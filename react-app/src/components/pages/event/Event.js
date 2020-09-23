import React, { Component } from 'react';
import Header2_2135 from '../../../images/backgrounds/Header2-2135.png';
import Banner from '../../sections/banner/Banner';
import Content from '../../sections/content/Content';
import './Event.scss';
import "react-alice-carousel/lib/alice-carousel.css";
import Countdown from '../../blocks/countdown/Countdown';


class Event extends Component {

  constructor() {
    super();
    
    this.state = {
      open: '',
    };
  }
  
  handleOnDragStart() {
    
  }
  
  componentDidMount() {
    


  }

  render () {
    // Falta: 'Sponsor', 'FeaturedSpeaker', 'Alliances',
    //['WantParticipate', 'VoluntaryList', 'Sponsor', 'FormContact',
    return (
      <div class="page page-event" >
        <div className="section banner banner-home" >
          <div className="background" >
            <div className="background-child" >
              <img src={Header2_2135} alt="Fondo del banner" />
            </div>
          </div>
          <div className="content" >
            <h1>Evento en vivo</h1>
            <Countdown></Countdown>
          </div>
        </div>
      </div>
    );
  }
}

export default Event;