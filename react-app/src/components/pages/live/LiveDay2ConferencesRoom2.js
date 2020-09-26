import React, { Component } from 'react';
import Header2_2135 from '../../../images/backgrounds/Header2-2135.png';
import Banner from '../../sections/banner/Banner';
import Content from '../../sections/content/Content';
import './Live.scss';
import "react-alice-carousel/lib/alice-carousel.css";
import Countdown from '../../blocks/countdown/Countdown';
import Streaming from '../../blocks/streaming/Streaming';
import SelectRoom from '../../blocks/select-room/SelectRoom';
import Sponsor from '../../blocks/sponsor/Sponsor';

class LiveDay2ConferencesRoom2 extends Component {

  constructor() {
    super();

    let youtubeid = '';
    if (window.localStorage) {
      youtubeid = window.localStorage.getItem('youtube_salon2');
      if (!youtubeid) {
        youtubeid = '';
      }
    }

    this.state = {
      youtubeid: youtubeid
    };
  }
  
  handleOnDragStart() {
    
  }

  componentDidMount() {
    let this__ = this;
    var starCountRef = window.fireDatabase.ref('live/youtube/salon2');
    starCountRef.on('value', function(snapshot) {
      this__.setState({
        ...this__.state, youtubeid: snapshot.val()
      });
    });
  }
  

  render () {
    // Falta: 'Sponsor', 'FeaturedSpeaker', 'Alliances',
    //['WantParticipate', 'VoluntaryList', 'Sponsor', 'FormContact',
    return (
      <div class="page page-live" >
        <div className="section banner banner-home" >
          <div className="background" >
            <div className="background-child" >
              <img src={Header2_2135} alt="Fondo del banner" />
            </div>
          </div>
          <div className="content" >
            <h1>Día de conferencias - Salón 2:</h1>
            <SelectRoom room="2"></SelectRoom>
            {
              (this.state.youtubeid !== '' ? <Streaming id={this.state.youtubeid} domain="drupalcamp.co" ></Streaming> : (<div style={{ 'textAlign': 'center', background: 'rgba(0,0,0,0.5)', height: '200px', marginTop: '100px', paddingTop: '90px', color: 'white', fontSize: '15px', }}>.. Cargando ...</div>))
            }
          </div>
        </div>
        <Sponsor></Sponsor>
      </div>
    );
  }
}

export default LiveDay2ConferencesRoom2;