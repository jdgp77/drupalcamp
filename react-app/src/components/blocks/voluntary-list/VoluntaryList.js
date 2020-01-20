import React, { Component } from 'react';
import './VoluntaryList.scss'
import ImageVoluntary from '../../../images/voluntarios/QuieresSerVoluntario.png';
import List from '../../structure/lists/list/List';
import jGet from '../../../services/conectapi';
import { filterTextFormat } from '../../../services/getcontent';

class VoluntaryList extends Component {
  constructor() {
    super();
    
    this.state = {
      title: '',
      description: '',
      image: ''
    }
  }

  componentDidMount() {
    jGet({
      url: '/jsonapi/block_content/basic/a4af341b-e576-4126-b586-9b20dd651090',
      withToken: true,
      then: (result) => {
        jGet({
          url: '/jsonapi/file/file/' + result.data.relationships.field_image_block.data.id,
          withToken: true,
          then: (result) => {
            const imageRoute = filterTextFormat(result.data.attributes.uri.url);
            this.setState({
              image: imageRoute
            });
          },
          err: (result) => {

          }
        });
        this.setState({
          title: result.data.attributes.info,
          description: result.data.attributes.body.value
        });
      },
      err: (result) => {

      }
    });
  }

  render () {

    return (
      <div className="block voluntary" id="block-voluntary">
        <div className="content" >
          <div className="row">
            <div className="col s12 l6">
              <h2 className="dc line-bottom right" >{this.state.title}</h2>
              <div className="paragraph" dangerouslySetInnerHTML={{__html: this.state.description }}></div>
              <List numCols={1} data={[
                {
                  title: 'Danos tu opinión',
                  description: '',
                  link: {
                    url: 'https://docs.google.com/forms/d/e/1FAIpQLSfyo9Hbx5PAM7NKxHQp4GGwArDZosLOXz4xqgzJzB1rKPcYUw/viewform',
                    target: '_blank'
                  }
                },
                {
                  title: '¿Te contactamos?',
                  description: '',
                  link: {
                    url: 'https://docs.google.com/forms/d/e/1FAIpQLSe-wFsnAJ1u2sGvGAZT2Cv4fD13m3Y115f_XXhZkPMVgiXzsA/viewform',
                    target: '_blank'
                  }
                },
              ]}></List>
            </div>
            <div className="col s1"></div>
            <div className="col s12 l5 image">
              <img src={this.state.image} alt="¿Quieres ser voluntario?" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VoluntaryList;