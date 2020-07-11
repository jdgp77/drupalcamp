import React, { Component } from 'react';
import './Alliances.scss';
import jGet, { jPost } from '../../../services/conectapi';
import List from '../../structure/lists/list/List';


class Alliances extends Component {

  constructor() {
    super();
    this.state = {
      title: 'Nuestras Alianzas',
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
      <div className="block alliances" id="alliances" >
        <div>
          <h2 className="dc line-bottom">{title}</h2>
          <span className="subtitle paragraph" dangerouslySetInnerHTML={{__html: description }}></span>
          <List type={"items"} numCols={1} data={[
            {
              title: 'React La Conferencia',
              description: 'Se realizará el<br/>18 de Julio del 2020',
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

export default Alliances;