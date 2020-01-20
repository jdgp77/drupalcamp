import React, { Component } from 'react';
import './Filter.scss';

class Filter extends Component {
  constructor() {
    super();
    
    this.state = {
      data: {
        title: 'Fitro',
        options: [{
          title: 'Por Area:',
          options: [
            'Comercial',
            'Desarrollo',
            'TI',
            'Talento Humano',
          ]
          },{
            title: 'Por conocimiento:',
            options: [
              'BackEnd',
              'FrontEnd',
              'Drupal 8',
              'Angular',
              '.Net',
            ]
          },{
            title: 'Por temas:',
            options: [
              'Procesos de la compañia',
            ]
          },
        ]
      }
    }
    
  }
  
  render () {
    if (this.props.data && this.props.data.title) {
      this.state.data = this.props.data;
    }
    
    let filters = this.state.data.options.map((data) => {
      let options = data.options.map((option) => {
        let text = option;
        return (
          <div>
            <label>
              <input type="checkbox" onChange={this.props.info.onChange}/>
              <span>{text}</span>
            </label>
          </div>);
      });
      return (
        <div>
          <h3 className="dc">{data.title}</h3>
          {options}
        </div>
      );
    });
    
    return (
      <div className="block filer list" >
        <h2 className="dc">{this.state.data.title}</h2>
        {filters}
      </div>
    );
  }
}

export default Filter;