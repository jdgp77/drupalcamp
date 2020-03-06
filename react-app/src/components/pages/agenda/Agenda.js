import React, { Component, Fragment } from 'react';
import Banner from '../../sections/banner/Banner';
import Content from '../../sections/content/Content';
import jGet from '../../../services/conectapi';

class Agenda extends Component {

  constructor() {
    super();
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render (match) {
    return (
      <Fragment>
        <Banner typeContent={"page"} ></Banner>
        <Content type={"one-column"} arBlocks={['Content']} typeContent={"page"} ></Content>
      </Fragment>
    );
  }
}

export default Agenda;