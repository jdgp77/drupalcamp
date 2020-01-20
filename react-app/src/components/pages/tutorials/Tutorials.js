import React, { Component } from 'react';
import Banner from '../../sections/banner/Banner';
import ContentList from '../../structure/lists/content-list/ContentList';

class Tutorials extends Component {

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
        <Banner uuid={"1500fce4-78cf-44d5-ad07-884921351f71"} ></Banner>
        <ContentList onLoadContent={this.setBanner} url={"/jsonapi/node/tutorial"} data={
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

export default Tutorials;