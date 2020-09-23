import React, { Component } from 'react';
import VoluntaryList from '../../blocks/voluntary-list/VoluntaryList';
import PreviousEventsList from '../../blocks/previous-events-list/PreviousEventsList';
import FormContact from '../../blocks/form-contact/FormContact';
import './Content.scss';
import Author from '../../blocks/author/Author';
import { getNodeTypeByUrl, filterTextFormat } from '../../../services/getcontent';
import WantParticipate from '../../blocks/wantparticipate/WantParticipate';
import Filter from '../../blocks/filter/Filter';
import TutorialList from '../../blocks/tutorial-list/TutorialList';
import Alliances from '../../blocks/alliances/Alliances';
import Sponsor from '../../blocks/sponsor/Sponsor';
import FeaturedSpeaker from '../../blocks/featured-speaker/FeaturedSpeaker';
import Countdown from '../../blocks/countdown/Countdown';

class Content extends Component {

  constructor() {
	  super();

    this.state = {
      title: '',
      description: ''
	  };
	}

	updateDimensions = () => {
		let images = document.querySelector('.page.content');
		if (images) {
			images = images.querySelectorAll('img');
			if (images) {
				for (let countImage = 0; countImage < images.length; countImage++) {
					let image = images[countImage];
		
					if (image.offsetWidth > image.parentElement.offsetWidth) {
						image.style.width="100%";
					}
				}
			}
		}
	};

  componentWillUnmount() {
		window.removeEventListener('resize', this.updateDimensions);
	}

  componentDidMount() {
    getNodeTypeByUrl({
      typeContent: this.props.typeContent,
      then: (attributes, commonFields) => {
        this.setState({
          title: commonFields.title,
          description: filterTextFormat(commonFields.body)
				});
				setTimeout(() => {
					this.updateDimensions();
				}, 100);
      }
    });
		window.addEventListener('resize', this.updateDimensions);

	}
	
	createComponent(name, data = {}, info = {}) {
		switch (name) {
			case 'VoluntaryList':
				return <VoluntaryList data={data} info={info} ></VoluntaryList>;
				break;
			case 'PreviousEventsList':
				return <PreviousEventsList data={data} info={info} ></PreviousEventsList>;
				break;
			case 'FormContact':
				return <FormContact data={data} info={info} ></FormContact>;
				break;
			case 'Author':
				return <Author data={data} info={info} ></Author>;
				break;
			case 'WantParticipate':
				return <WantParticipate data={data} info={info} ></WantParticipate>;
				break;
			case 'Filter':
				return <Filter data={data} info={info} ></Filter>;
				break;
			case 'TutorialList':
				return <TutorialList data={data} info={info} ></TutorialList>;
				break;
			case 'Alliances':
				return <Alliances data={data} info={info} ></Alliances>;
			case 'Sponsor':
				return <Sponsor data={data} info={info} ></Sponsor>;
				break;
			case 'FeaturedSpeaker':
				return <FeaturedSpeaker data={data} info={info} ></FeaturedSpeaker>;
				break;
			case 'Countdown':
				return <Countdown data={data} info={info} ></Countdown>;
				break;
		}
	}
	
	generateBlocks(arBlocks, info) {
		let blocks = <div></div>;
		if (arBlocks) {
			blocks = arBlocks.map((comp, index) => {
				let name = '';
				let block = <div></div>;
				if (comp.name)  {
					name = comp.name;
				}
				else {
					name = comp;
				}
				
				if (name == 'Content') {
					let title = this.state.title;
					let description = this.state.description;
					
					return (
						<div className="principal-column" >
							<div className="page content" >
								<h1 className="dc" >{title}</h1>
								<p  className="dc" dangerouslySetInnerHTML={{__html: description }}></p>
							</div>
						</div>
					);
				}
				
				if (comp.name)  {
					block = this.createComponent(name, comp.data, comp.info);
				}
				else {
					block = this.createComponent(name);
				}
				return (<div key={index} className={info.generalClass}>{block}</div>);
			});
		}
		return blocks;
	}

  render() {
		const { arBlocks, arPrimaryBlocks, arSecondaryBlocks, info = {} } = this.props;
		
		let ourClass = '';
		if (info.fullwidth) {
			ourClass += 'full-page ';
		}

		let principalBlocks = this.generateBlocks(arBlocks, {
			generalClass: 'principal-column',
		});

		let primaryBlocks = this.generateBlocks(arPrimaryBlocks, {
			generalClass: 'primary-column',
		});
		
		let secondaryBlocks = this.generateBlocks(arSecondaryBlocks, {
			generalClass: 'secondary-column',
		});

		if (arPrimaryBlocks !== undefined && arSecondaryBlocks === undefined && principalBlocks !== undefined) {
			return (
				<div className={"section-content two-column " + ourClass} >
					{primaryBlocks}
					{principalBlocks}
				</div>
			);
		}
		if (arPrimaryBlocks === undefined && arSecondaryBlocks !== undefined && principalBlocks !== undefined) {
			return (
				<div className="section-content one-column" >
					{principalBlocks}
					{secondaryBlocks}
				</div>
			);
		}
		if (arPrimaryBlocks === undefined && arSecondaryBlocks === undefined && principalBlocks !== undefined) {
			return (
				<div className="section-content one-column" >
					<div>{principalBlocks}</div>
				</div>
			);
		}
  }
}

export default Content;