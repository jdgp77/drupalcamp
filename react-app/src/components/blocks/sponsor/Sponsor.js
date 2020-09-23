import React, { Component } from 'react';
import './Sponsor.scss';
import jGet, { jPost } from '../../../services/conectapi';
import List from '../../structure/lists/list/List';


class Sponsor extends Component {

  constructor() {
    super();
    this.state = {
      title: 'Nuestros Patrocinadores',
      description: '',
      diamont: [],
      gold: [],
      silver: [],
    };
  }

  componentDidMount() {
    jGet({
      url: '/ourapi/sponsorship?_format=json',
      withToken: true,
      then: (result) => {
        let newData = [];
        for (let i in result) {
          let data = result[i];
          //data.title[0].value
          let imageUrl = data.field_image[0].url;
          let link = (data.field_link[0] ? data.field_link[0].uri : '');
          let sponsorship = data.field_sponsorship_type[0].target_id;
          if (newData[sponsorship] === undefined) {
            newData[sponsorship] = [];
          }
          newData[sponsorship][newData[sponsorship].length] = {
            title: '',
            description: '',
            image: imageUrl,
            link: {
              url: link,
              target: '_blank'
            },
          };
        }
        console.log('newData', newData);
        this.setState({
          ...this.state, ...{
            diamont: newData[5],
            gold: newData[6],
            silver: newData[7]
          }
        });
      },
      err: (result) => {

      }
    });
  }

  render () {
    var title = this.state.title;
    var description = this.state.description;

    return (
      <div className="block sponsor" id="sponsor" >
        <div>
          <h2 className="dc line-bottom">{title}</h2>
          <span className="subtitle paragraph" dangerouslySetInnerHTML={{__html: description }}></span>
          { (this.state.diamont ?  <><h3 className="dc sub-title" >DIAMANTE</h3><List type={"items"} numCols={(this.state.diamont.length <= 3 ? this.state.diamont.length : 3)} data={this.state.diamont}></List></> : <></>) }
          { (this.state.gold ?  <><h3 className="dc sub-title" >ORO</h3><List type={"items"} numCols={(this.state.gold.length <= 3 ? this.state.gold.length : 3)} data={this.state.gold}></List></> : <></>) }
          { (this.state.silver ?  <><h3 className="dc sub-title" >PLATA</h3><List type={"items"} numCols={(this.state.silver.length <= 3 ? this.state.silver.length : 3)} data={this.state.silver}></List></> : <></>) }
        </div>
      </div>
    );
  }
}

export default Sponsor;