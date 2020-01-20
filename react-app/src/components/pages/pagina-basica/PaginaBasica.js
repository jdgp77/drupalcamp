import React, { Component } from 'react';
import Banner from '../../sections/banner/Banner';
import Content from '../../sections/content/Content';
import jGet from '../../../services/conectapi';

class PaginaBasica extends Component {

  constructor() {
    super();
  }

  render (match) {
    return (
      <div>
        <Banner typeContent={"page"} ></Banner>
        <Content type={"one-column"} arBlocks={['Content']} typeContent={"page"} ></Content>
      </div>
    );
  }
}

export default PaginaBasica;