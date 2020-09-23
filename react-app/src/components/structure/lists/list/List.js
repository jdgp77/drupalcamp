import React, { Component } from 'react';
import './List.scss';

class List extends Component {
  constructor() {
    super();

    this.state = {
			data: [
				{
					title: '',
					description: ''
				}
			]
		};
  }

  componentDidMount () {

  }

  render () {
		let { data = {}, numCols, type = 'media', info = {} } = this.props;

		if (info.type) {
			type = info.type;
		}
		
		if (info.columns === undefined) {
			info.columns = 'columns';
		}

		let title = '';
		if (info.title) {
			title = <h2 className="dc" > {info.title} </h2>;
		}
		else if (data.title) {
			title = <h2 className="dc" > {data.title} </h2>;
		}

		let lists = data;
		if (data.data) {
			lists = data.data;
		}
		
		let ourGlobalClass = '';
		let ourClass = '';
		switch (info.columns) {
			case 'columns':
				ourGlobalClass = 'list-of-cols';
				ourClass = "list col s12 l" + (12/numCols);
				break;
			case 'width-fixed':
				ourClass = "list width-" + (info.width);
				ourGlobalClass = 'width-fixed';
				break;
			default:
				ourClass = "list col s12 l" + (12/numCols);
		}

		let listItems = lists.map((item) => {
			var getItemStructure = () => {
				switch(type) {
					case 'items':
						return (<div className={ourClass}>
								<div className="itemcard items">
									<div className="image">
										<img src={item.image ? item.image : ''} />
									</div>
									<div className="content">
										<h3 className="dc" >{ item.title }</h3>
										<div className="paragraph" dangerouslySetInnerHTML={{__html: item.description }}></div>
									</div>
								</div>
							</div>);
					case 'media':
						return (<div className={ourClass}>
								<div className="itemcard media">
									<div className="image">
			
									</div>
									<div className="content">
										<h3 className="dc" >{ item.title }</h3>
										<div className="paragraph" dangerouslySetInnerHTML={{__html: item.description }}></div>
									</div>
								</div>
							</div>);
					case 'card':
						 return (<div className={ourClass}>
							 <div className="itemcard card">
								 <div className="image">
		 
								 </div>
								 <div className="content">
									 <h3 className="dc" >{ item.title }</h3>
									 <div className="paragraph" dangerouslySetInnerHTML={{__html: item.description }}></div>
								 </div>
							 </div>
						 </div>);
				}
				
			}

			if (item.link) {
				if (item.link.url) {
					if (typeof item.link.url == 'string' && item.link.url != '') {
						if (!item.link.target) {
							item.link.target = '';
						}
						return <a target={item.link.target} href={item.link.url} >
							{ getItemStructure() }
						</a>
					}
					else {
						return getItemStructure();
					}
				}
				else {
					if (typeof item.link == 'string' && item.link != '') {
						return <a href={item.link} >
							{ getItemStructure() }
						</a>
					}
					else {
						return getItemStructure();
					}
				}
			}
			else {
				return getItemStructure();
			}
		});

    return (
			<div className={"structure-list " + ourGlobalClass} >
				{title}
        <div className="content" >
          <div className="row">
						{listItems}
          </div>
        </div>
      </div>
    );
  }
}

export default List;