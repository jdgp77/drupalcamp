import React, { Component } from 'react';
import './Streaming.scss';

class Streaming extends Component {
  render () {
    var idYoutube = this.props.id;
    var domain = this.props.domain;

    return (
      <div className="block streaming" >
        <div className="container-streaming" >
          <div className="section event" >
            <div className="cont-video" >
              <iframe className="video" width="560" height="315" src={ 'https://www.youtube.com/embed/' + idYoutube + '?autoplay=1'} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <iframe className="chat" width="150px" height="100px" src={ 'https://www.youtube.com/live_chat?v=' + idYoutube + '&amp;embed_domain=' + domain } ></iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default Streaming;