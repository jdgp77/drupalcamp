import React, { Component } from 'react';
import './SelectRoom.scss';
import { Link } from "react-router-dom";

class SelectRoom extends Component {
  constructor() {
    super();

    this.state = {
      numImage: 1,
    }
  }
  
  
  componentDidMount() {
    let this__ = this;
    var starCountRef = window.fireDatabase.ref('live/rooms/numImageToSelectRoom');
    starCountRef.on('value', function(snapshot) {
      this__.setState({
        ...this__.state, numImage: snapshot.val()
      });
    });
  }

  render () {
    
    
    return (
      <div className="block select-room" >
        <div className="dc-container" >
          <img src={'/Evento/Img' + this.state.numImage + '.png'} />
          <Link className={'room1 ' + (this.props.room == '1' ? 'roomhere' : '') } to={'/live-dia2'}><div className="amhere" ><span><strong>Usted esta aquí</strong></span></div></Link>
          <Link className={'room2 ' + (this.props.room == '2' ? 'roomhere' : '') } to={'/live-dia2-salon2'}><div className="amhere" ><span><strong>Usted esta aquí</strong></span></div></Link>
          <div className="sing" >Selecciona el salón</div>
        </div>
      </div>
    );
  }
}

export default SelectRoom;