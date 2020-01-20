import React, { Component } from 'react';
import Banner from '../../sections/banner/Banner';
import List from '../../structure/lists/list/List';
import ContentList from '../../structure/lists/content-list/ContentList';

class Courses extends Component {

  constructor() {
    super();

    this.state = {
      title: '',
      summary: ''
    };
  }

  setBanner = (data) => {
    let title = '';
    if (data.title) {
      title = data.title;
    }
    let summary = '';
    if (data.summary) {
      summary = data.summary;
    }
    this.setState({
      title: title,
      summary: summary
    });
  }

  render () {
    return (
      <div className="dc page-one-column page-courses">
        <Banner uuid={"e6449181-04bc-4e57-9f6e-92a95f758f19"} ></Banner>
        <ContentList onLoadContent={this.setBanner} url={"/jsonapi/node/course"} data={
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

export default Courses;