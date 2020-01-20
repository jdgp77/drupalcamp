import React, { Component } from 'react';
import './ContentList.scss';
import List from '../list/List';
import jGet from '../../../../services/conectapi';

class ContentList extends Component {
  constructor() {
    super();

    this.state = {
      items: []
    };

  }

  getElementsByArrayItems(data) {
    let items = [];
    for (let nameField in this.props.data.items) {
      let prevElemeData = data;
      for (let numField in this.props.data.items[nameField]) {
        if (this.props.data.items[nameField][numField]) {
          if (prevElemeData[this.props.data.items[nameField][numField]]) {
            prevElemeData = prevElemeData[this.props.data.items[nameField][numField]];
          }
        }
      }
      if (typeof prevElemeData == 'string') {
        items[nameField] = prevElemeData;
      }
      else {
        items[nameField] = '';
      }
    }
    return items;
  }

  getContentData(result) {
    let items = [];
    for (let numData in result.data) {
      let data = result.data[numData];
      let numItems = items.length;
      items[numItems] = this.getElementsByArrayItems(data);
    }
    this.setState({
      items: items
    });
    this.props.onLoadContent && this.props.onLoadContent(items);
  }

  componentDidMount () {
    if (this.props.url) {
      jGet({
        url: this.props.url,
        withToken: true,
        then: (result) => {
          this.getContentData(result);
        },
        err: (result) => {

        }
      });
    }
    else if (this.props.typeContent && this.props.fromRelationships) {
      jGet({
        url: '/jsonapi/node/' + this.props.typeContent + '?include=' + this.props.fromRelationships,
        withToken: true,
        then: (result) => {
          let idRelations = [];
          for (let numData in result.data) {
            let data = result.data[numData];
            if (data.relationships && data.relationships[this.props.fromRelationships] && data.relationships[this.props.fromRelationships].data) {
              for (let numDataRelation in data.relationships[this.props.fromRelationships].data) {
                let relationData = data.relationships[this.props.fromRelationships].data[numDataRelation];
                idRelations[idRelations.length] = relationData.id;
              }
            }
          }
          let items = [];
          for (let numData in result.included) {
            let included = result.included[numData];
            if (idRelations.includes(included.id)) {
              items[items.length] = this.getElementsByArrayItems(included);
            }
          }
          this.setState({
            items: items
          });
        },
        err: (result) => {

        }
      });
    }
    else if (this.props.typeContent) {
      jGet({
        url: '/jsonapi/node/' + this.props.typeContent,
        withToken: true,
        then: (result) => {
          this.getContentData(result);
        },
        err: (result) => {

        }
      });
    }
  }

  render () {
    const { data } = this.props;

    return (
      <div className="block content content-list" >
        <div className="content" >
          <h1>{ data.title }</h1>
          <p>{ data.description }</p>
          <List numCols={3} data={this.state.items}></List>
        </div>
      </div>
    );
  }
}

export default ContentList;