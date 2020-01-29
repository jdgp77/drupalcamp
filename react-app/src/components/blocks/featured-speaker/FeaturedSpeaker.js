import React, { Component } from 'react';
import './FeaturedSpeaker.scss';
import jGet, { jPost } from '../../../services/conectapi';
import List from '../../structure/lists/list/List';


class FeaturedSpeaker extends Component {

  constructor() {
    super();
    this.state = {
      title: 'Oradores Destacados',
      description: ''
    };
  }

  componentDidMount() {
    /*
    jGet({
      url: '/jsonapi/webform/webform/cbd7a5b5-d113-48ee-86dc-55a38a5d4d2a?fields[webform--webform]=title,description',
      withToken: true,
      then: (result) => {
        this.setState({
          title: result.data.attributes.title,
          description: result.data.attributes.description
        });
      },
      err: (result) => {

      }
    });
    */
  }

  render () {
    var title = this.state.title;
    var description = this.state.description;

    return (
      <div className="block featured-speaker" id="recibe-informacion" >
        <div>
          <h2 className="dc line-bottom">{title}</h2>
          <span className="subtitle paragraph" dangerouslySetInnerHTML={{__html: description }}></span>
          <List type={"items"} numCols={4} data={[
            {
              title: 'Aldibier',
              description: '',
              link: {
                url: 'https://reactlaconf.co/',
                target: '_blank'
              },
            },
            {
              title: 'Aldibier',
              description: '',
              link: {
                url: 'https://reactlaconf.co/',
                target: '_blank'
              },
            },
            {
              title: 'Aldibier',
              description: '',
              link: {
                url: 'https://reactlaconf.co/',
                target: '_blank'
              },
            },
            {
              title: 'Aldibier',
              description: '',
              link: {
                url: 'https://reactlaconf.co/',
                target: '_blank'
              },
            },
          ]}></List>
        </div>
      </div>
    );
  }
}

export default FeaturedSpeaker;