import React, { Component } from 'react';
import Header2_2135 from '../../../images/backgrounds/Header2-2135.png';
import DrupalCamp from '../../../images/logos/DrupalCamp.png';
import './Banner.scss';
import jGet from '../../../services/conectapi';
import { getNodByUuid, getNodeTypeByUrl } from '../../../services/getcontent';

class Banner extends Component {

  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
      summary: ''
    };

  }

  componentDidMount () {
    const { uuid, type } = this.props;

    if (type === 'Home') {
      jGet({
        url: '/jsonapi/block_content/basic/ee093510-da58-4fe4-8b25-83c72444806d',
        withToken: true,
        then: (result) => {
          this.setState({
            title: result.data.attributes.info,
            description: result.data.attributes.body.value
          });
        },
        err: (result) => {

        }
      });
    }
    else {
      if (this.props.uuid) {
        getNodByUuid({
          typeContent: 'page',
          uuid: this.props.uuid,
          then: (attributes, commonFields) => {
            this.setState({
              title: commonFields.title,
              summary: commonFields.summary
            });
          }
        });
      }
      else {
        getNodeTypeByUrl({
          typeContent: this.props.typeContent,
          then: (attributes, commonFields) => {
            this.setState({
              title: commonFields.title,
              summary: commonFields.summary
            });
          }
        });
      }
    }
  }

  render () {
    const { type, content } = this.props;
    const { title, summary, description } = this.state;

    if (type === 'Home') {
      return (
        <div className="section banner banner-home" >
          <div className="background" >
            <div className="background-child" >
              <img src={Header2_2135} alt="Fondo del banner" />
            </div>
          </div>
          <div className="content" >
            <div>
              <div className="row">
                <div className="col s12 l6">
                  <h1 className="dc" >{ title }</h1>
                  <p className="description dc" dangerouslySetInnerHTML={{__html: description }}></p>
                  <span className="call-to-action">
                  <a className="waves-effect waves-light btn mr-20" href="#recibe-informacion" >Comprar entrada</a>
                    <a className="waves-effect waves-light btn secondary" href="#recibe-informacion" >Informate</a>
                  </span>
                </div>
                <div className="col s1"></div>
                <div className="col s12 l5">
                  <img src={DrupalCamp} alt="Fondo del banner" />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (content !== undefined) {
      return (
        <div className="section banner banner-content" >
          <div className="background" >
            <div className="background-child" >
              <img src={Header2_2135} alt="Fondo del banner" />
            </div>
          </div>
          <div className="content" >
            <h1 className="dc" >{ content.title }</h1>
            <p  className="dc description" dangerouslySetInnerHTML={{__html: content.summary }}></p>
          </div>
        </div>
      );
    }
    else if (type === 'Search') {
      this.props.onKeyUp();
      return (
        <div className="section banner banner-search" >
          <div className="background" >
            <div className="background-child" >
              <img src={Header2_2135} alt="Fondo del banner" />
            </div>
          </div>
          <div className="content" >
            <input type="text" id="search-gc" placeholder="Buscar tu contenido" onChange={this.props.onChange} onKeyUp={this.props.onKeyUp} />
          </div>
        </div>
      );
    }
    else {
      return (
        <div className="section banner banner-content" >
          <div className="background" >
            <div className="background-child" >
              <img src={Header2_2135} alt="Fondo del banner" />
            </div>
          </div>
          <div className="content" >
            <h1 className="dc" >{ title }</h1>
            <p  className="dc description" dangerouslySetInnerHTML={{__html: summary }}></p>
          </div>
        </div>
      );
    }
  }
}

export default Banner;