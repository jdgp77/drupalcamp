import React, { Component } from 'react';
import './PreviousEventsList.scss';
import List from '../../structure/lists/list/List';

class PreviousEventsList extends Component {
  constructor() {
    super();
  }

  render () {
    return (
      <div className="block events">
        <div>
          <h2 className="dc line-bottom" >Eventos <span className="normal">previos</span></h2>
          <span className="subtitle"></span>
          <List numCols={1} data={[
            {
              title: 'Meetup - Bogota Colombia',
              description: '<p>Este sabado 14 de Septimbre nos reuniremos a hablar de:</p><ul><li>Sitios desacoplados.</li><li>Testing.</li></ul><p>No te lo puedes perder</p>',
              link: {
                url: 'https://www.meetup.com/es-ES/Bogota-Drupal-Meetup/events/264400619/',
                target: '_blank'
              }
            }
          ]}></List>
        </div>
      </div>
    );
  }
}

export default PreviousEventsList;