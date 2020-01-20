import React, { Component } from 'react';
import Banner from '../../sections/banner/Banner';
import jGet from '../../../services/conectapi';
import Content from '../../sections/content/Content';
import ContentList from '../../structure/lists/content-list/ContentList';

class Course extends Component {

  constructor() {
    super();
  }

  componentDidMount() {

  }

  render () {

    return (
      <div>
        <Banner typeContent={"course"} ></Banner>
        <ContentList typeContent={"course"} fromRelationships={"field_tutorialgroups"} data={
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

export default Course;