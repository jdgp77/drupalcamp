import React, { Component } from 'react';
import './Sponsor.scss';
import jGet, { jPost } from '../../../services/conectapi';
import List from '../../structure/lists/list/List';


class Sponsor extends Component {

  constructor() {
    super();
    this.state = {
      title: 'Nuestros Patrocinadores',
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
      <div className="block sponsor" id="recibe-informacion" >
        <div>
          <h2 className="dc line-bottom">{title}</h2>
          <span className="subtitle paragraph" dangerouslySetInnerHTML={{__html: description }}></span>
          <h3 className="dc sub-title" >DIAMANTE</h3>
          <List type={"items"} numCols={4} data={[
            {
              title: '',
              description: '',
              link: {
                url: 'https://reactlaconf.co/',
                target: '_blank'
              },
            },
            {
              title: '',
              description: '',
              link: {
                url: 'https://drupaliz.me',
                target: '_blank'
              },
            },
            {
              title: '',
              description: '',
              link: {
                url: 'https://drupaliz.me',
                target: '_blank'
              },
            },
            {
              title: '',
              description: '',
              link: {
                url: 'https://drupaliz.me',
                target: '_blank'
              },
            },
            {
              title: '',
              description: '',
              link: {
                url: 'https://drupaliz.me',
                target: '_blank'
              },
            },
            {
              title: '',
              description: '',
              link: {
                url: 'https://drupaliz.me',
                target: '_blank'
              },
            },
          ]}></List>
          <h3 className="dc sub-title" >ORO</h3>
          <List type={"items"} numCols={4} data={[
            {
              title: '',
              description: '',
              link: {
                url: 'https://reactlaconf.co/',
                target: '_blank'
              },
            },
            {
              title: '',
              description: '',
              link: {
                url: 'https://drupaliz.me',
                target: '_blank'
              },
            },
            {
              title: '',
              description: '',
              link: {
                url: 'https://drupaliz.me',
                target: '_blank'
              },
            },
            {
              title: '',
              description: '',
              link: {
                url: 'https://drupaliz.me',
                target: '_blank'
              },
            },
            {
              title: '',
              description: '',
              link: {
                url: 'https://drupaliz.me',
                target: '_blank'
              },
            },
            {
              title: '',
              description: '',
              link: {
                url: 'https://drupaliz.me',
                target: '_blank'
              },
            },
          ]}></List>
          <h3 className="dc sub-title" >PLATA</h3>
          <List type={"items"} numCols={4} data={[
            {
              title: '',
              description: '',
              link: {
                url: 'https://reactlaconf.co/',
                target: '_blank'
              },
            },
            {
              title: '',
              description: '',
              link: {
                url: 'https://drupaliz.me',
                target: '_blank'
              },
            },
            {
              title: '',
              description: '',
              link: {
                url: 'https://drupaliz.me',
                target: '_blank'
              },
            },
            {
              title: '',
              description: '',
              link: {
                url: 'https://drupaliz.me',
                target: '_blank'
              },
            },
            {
              title: '',
              description: '',
              link: {
                url: 'https://drupaliz.me',
                target: '_blank'
              },
            },
            {
              title: '',
              description: '',
              link: {
                url: 'https://drupaliz.me',
                target: '_blank'
              },
            },
          ]}></List>
        </div>
      </div>
    );
  }
}

export default Sponsor;