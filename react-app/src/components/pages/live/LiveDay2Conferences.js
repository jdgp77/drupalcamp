import React, { Component } from 'react';
import Header2_2135 from '../../../images/backgrounds/Header2-2135.png';
import Banner from '../../sections/banner/Banner';
import Content from '../../sections/content/Content';
import './Live.scss';
import "react-alice-carousel/lib/alice-carousel.css";
import Countdown from '../../blocks/countdown/Countdown';
import Streaming from '../../blocks/streaming/Streaming';
import SelectRoom from '../../blocks/select-room/SelectRoom';

class LiveDay2Conferences extends Component {

  constructor() {
    super();

    let showWorkshop = false;
    let youtubeid = '';
    if (window.localStorage) {
      showWorkshop = window.localStorage.getItem('showSelection');
      if (!showWorkshop || showWorkshop=='false') {
        showWorkshop = false;
      }
    }
    if (window.localStorage) {
      youtubeid = window.localStorage.getItem('youtube_salon1');
      if (!youtubeid) {
        youtubeid = '';
      }
    }

    this.state = {
      showWorkshop: showWorkshop,
      youtubeid: youtubeid
    };
  }
  
  handleOnDragStart() {
    
  }
  
  componentDidMount() {
    let this__ = this;
    var starCountRef = window.fireDatabase.ref('live/rooms/showSelection');
    starCountRef.on('value', function(snapshot) {
      this__.setState({
        ...this__.state, showWorkshop: snapshot.val()
      });
    });
    var starCountRef = window.fireDatabase.ref('live/youtube/salon1');
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
            <h1>Día de conferencias { (this.state.showWorkshop ? '- Salón 1' : '' ) }:</h1>
            { (this.state.showWorkshop ? <SelectRoom room="1"></SelectRoom> : <></>) }
            {
              (this.state.youtubeid !== '' ? <Streaming id={this.state.youtubeid} domain="drupalcamp.co" ></Streaming> : (<div style={{ 'textAlign': 'center', background: 'rgba(0,0,0,0.5)', height: '200px', marginTop: '100px', paddingTop: '90px', color: 'white', fontSize: '15px', }}>.. Cargando ...</div>))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default LiveDay2Conferences;