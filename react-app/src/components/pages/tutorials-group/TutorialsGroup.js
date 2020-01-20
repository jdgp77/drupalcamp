import React, { Component } from 'react';
import Banner from '../../sections/banner/Banner';
import jGet from '../../../services/conectapi';
import Content from '../../sections/content/Content';
import ContentList from '../../structure/lists/content-list/ContentList';

class TutorialsGroup extends Component {

  constructor() {
    super();
  }

  componentDidMount() {

  }

  render () {

    return (
      <div>
        <Banner typeContent={"group_of_tutorials"} ></Banner>
        <ContentList typeContent={"group_of_tutorials"} fromRelationships={"field_tutorials"} data={
          {
            items: {
              title: ['attributes', 'title'],
              summary: ['attributes', 'body', 'summary'],
              description: ['attributes', 'body', 'summary'],
              link: ['attributes', 'path', 'alias']
            }
          }
        } ></ContentList>
      </div>
    );
  }
}

export default TutorialsGroup;