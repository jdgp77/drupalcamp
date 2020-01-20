import React, { Component } from 'react';
import './List.scss';
import jGet from '../../../services/conectapi';

class List extends Component {
  constructor() {
    super();

    this.state = {};
    this.cards = [];
  }

  componentDidMount () {
    if (this.props.url) {
      jGet({
        url: this.props.url,
        withToken: true,
        then: (result) => {
          for (let numData in result.data) {
            let numCards = this.cards.length;
            this.cards[numCards] = [];
            let data = result.data[numData];
            for (let nameField in this.props.data.card) {
              let prevElemeData = data;
              for (let numField in this.props.data.card[nameField]) {
                if (this.props.data.card[nameField][numField]) {
                  if (prevElemeData[this.props.data.card[nameField][numField]]) {
                    prevElemeData = prevElemeData[this.props.data.card[nameField][numField]];
                  }
                }
              }
              if (typeof prevElemeData == 'string') {
                this.cards[numCards][nameField] = prevElemeData;
              }
              else {
                this.cards[numCards][nameField] = '';
              }
            }
          }
          console.log(this.cards);
          this.setState(this.cards);
        },
        err: (result) => {

        }
      });
    }
  }

  render () {
    const { data } = this.props;
    console.log(this.state);
    let blocks = <div></div>;

    if (this.state[0]) {
      blocks = this.cards.map((data) => {
        return (<div className="col s12 m3">
          <div className="card">
            <div className="card-image">
              <img src="images/sample-1.jpg" />
              <span className="card-title">{data.title}</span>
            </div>
            <div className="card-content" dangerouslySetInnerHTML={{__html: data.description }}>
            </div>
            <div className="card-action">
              <a href={data.url} >Ver más</a>
            </div>
          </div>
        </div>)
      });
    }

    return (
      <div className="block list" >
        <div className="content" >
          <div className="row">
            <div className="col s12 l6">
              <h1>{ data.title }</h1>
              <p>{ data.description }</p>
              <div className="row">
                {blocks}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default List;