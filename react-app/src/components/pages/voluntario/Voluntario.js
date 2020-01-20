import React, { Component } from 'react';
import Banner from '../../sections/banner/Banner';
import Content from '../../sections/content/Content';

class Voluntario extends Component {

  constructor() {
    super();
  }

  render () {
    return (
      <div>
        <Banner></Banner>
        <Content type={"two-column"} arBlocks={['VoluntaryList', 'FormContact']} arSecondaryBlocks={['VoluntaryList']} ></Content>
      </div>
    );
  }
}

export default Voluntario;