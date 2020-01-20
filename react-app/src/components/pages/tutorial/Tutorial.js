import React, { Component } from 'react';
import Banner from '../../sections/banner/Banner';
import Content from '../../sections/content/Content';
import jGet from '../../../services/conectapi';

class Tutorial extends Component {

  constructor() {
    super();
  }

  render (match) {
    return (
      <div>
        <Banner typeContent={"tutorial"} ></Banner>
        <Content type={"two-column"} arBlocks={['Content']} typeContent={"tutorial"} arSecondaryBlocks={['Author']} ></Content>
      </div>
    );
  }
}

export default Tutorial;