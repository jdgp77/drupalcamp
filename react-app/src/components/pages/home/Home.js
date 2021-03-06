import React, { Component } from 'react';
import Banner from '../../sections/banner/Banner';
import Content from '../../sections/content/Content';
import './Home.scss';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
class Home extends Component {

  constructor() {
    super();
    
    this.state = {
      open: '',
    };
  }
  
  handleOnDragStart() {
    
  }

  render () {
    // Falta: 'Sponsor', 'FeaturedSpeaker', 'Alliances',
    //['WantParticipate', 'VoluntaryList', 'Sponsor', 'FormContact',
    return (
      <div>
        <Banner type={"Home"} uuid={"ee093510-da58-4fe4-8b25-83c72444806d"} ></Banner>
        <Content type={"one-column"} arBlocks={['Countdown', 'Sponsor', 'VoluntaryList', 'FormContact',]}></Content>
      </div>
    );
  }
}

export default Home;