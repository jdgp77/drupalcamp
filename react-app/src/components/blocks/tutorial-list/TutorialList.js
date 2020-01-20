import React, { Component } from 'react';
import './TutorialList.scss';
import List from '../../structure/lists/list/List';
import textModifier from '../../../services/text';
import jGet from '../../../services/conectapi';

class TutorialList extends Component {
  
  constructor() {
    super();
    
    this.state = {
        lists: [{
          info: {
            columns: 'width-fixed',
            width: '300',
          }
        },{ 
          info: { 
            columns: 'width-fixed', 
            width: '300',
          },
          data: {
            title: 'Tutoriales',
            data: [
              {
                title: 'Como llenar el formulario de vacaciones',
                description: '<p>No te lo puedes perder</p>',
                link: {
                  url: 'https://www.meetup.com/es-ES/Bogota-Drupal-Meetup/events/264400619/',
                  target: '_blank'
                }
              },
              {
                title: 'Como llenar el formulario de vacaciones',
                description: '<p>No te lo puedes perder</p>',
                link: {
                  url: 'https://www.meetup.com/es-ES/Bogota-Drupal-Meetup/events/264400619/',
                  target: '_blank'
                }
              },
              {
                title: 'Como llenar el formulario de vacaciones',
                description: '<p>No te lo puedes perder</p>',
                link: {
                  url: 'https://www.meetup.com/es-ES/Bogota-Drupal-Meetup/events/264400619/',
                  target: '_blank'
                }
              },{
                title: 'Como llenar el formulario de vacaciones',
                description: '<p>No te lo puedes perder</p>',
                link: {
                  url: 'https://www.meetup.com/es-ES/Bogota-Drupal-Meetup/events/264400619/',
                  target: '_blank'
                }
              },
              {
                title: 'Como llenar el formulario de vacaciones',
                description: '<p>No te lo puedes perder</p>',
                link: {
                  url: 'https://www.meetup.com/es-ES/Bogota-Drupal-Meetup/events/264400619/',
                  target: '_blank'
                }
              },
              {
                title: 'Como llenar el formulario de vacaciones',
                description: '<p>No te lo puedes perder</p>',
                link: {
                  url: 'https://www.meetup.com/es-ES/Bogota-Drupal-Meetup/events/264400619/',
                  target: '_blank'
                }
              },{
                title: 'Como llenar el formulario de vacaciones',
                description: '<p>No te lo puedes perder</p>',
                link: {
                  url: 'https://www.meetup.com/es-ES/Bogota-Drupal-Meetup/events/264400619/',
                  target: '_blank'
                }
              },
              {
                title: 'Como llenar el formulario de vacaciones',
                description: '<p>No te lo puedes perder</p>',
                link: {
                  url: 'https://www.meetup.com/es-ES/Bogota-Drupal-Meetup/events/264400619/',
                  target: '_blank'
                }
              },
              {
                title: 'Como llenar el formulario de vacaciones',
                description: '<p>No te lo puedes perder</p>',
                link: {
                  url: 'https://www.meetup.com/es-ES/Bogota-Drupal-Meetup/events/264400619/',
                  target: '_blank'
                }
              },
            ]
          }
        },{
          info: {
            columns: 'width-fixed',
            width: '300',
            type: 'media' 
          }
        },
      ],
    };
  }

  componentDidMount () {
    
  }

  render () {
    let lists = this.props.data.lists;
    
    for(let numList in lists) {
      let list = lists[numList];
      let listOfData = [];
      for (let numData in list.data.data) {
        let data = list.data.data[numData];
        let bnDataHasContent = false;
        let toSearch = textModifier.machine(this.props.info.search);
        if ((textModifier.machine(data.title).search(toSearch) !== -1) || (data.description && (textModifier.machine(data.description).search(toSearch) !== -1))) {
          bnDataHasContent = true;
        }
        
        if (bnDataHasContent) {
          listOfData[listOfData.length] = data;
        }
      }
      lists[numList].data.data = listOfData;
    }
    
    let listsHtml = lists.map((list) => {
      return <List type={"card"} info={list.info} data={list.data}></List>
    });
    
    return (
      <div className="block tutorial-list" id="block-tutorial">
        {listsHtml}
      </div>
    );
  }
}

export default TutorialList;