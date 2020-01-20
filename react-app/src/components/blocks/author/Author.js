import React, { Component } from 'react';
import './Author.scss';
import jGet from '../../../services/conectapi';

class Author extends Component {
  constructor() {
    super();
  }

  render () {
    return (
      <div className="block list" >
          image
          Autor: Julian David Guerrero Pinilla<br/>
          Drupal: Senior<br/>
      </div>
    );
  }
}

export default Author;