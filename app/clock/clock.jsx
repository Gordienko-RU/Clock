import React from 'react';
import {Arrow} from './arrow.jsx';
import {getCurrentPosition} from './getPositions.js';

export class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arrowsPosition: getCurrentPosition()
        }
    }
    
    componentDidMount() {
       setInterval(
           () => {
             this.setState(() => {  
               return {arrowsPosition: getCurrentPosition()}
             }
             )
           }, 1000
       );
    }
    
    render() {
      return(
        <div className={"clock " + this.props.className}>
          <div className="arrow-wrapper">
             <Arrow angle={this.state.arrowsPosition['secondArrow']} className="secArrow" />
             <Arrow angle={this.state.arrowsPosition['minuteArrow']} className="minArrow" />
             <Arrow angle={this.state.arrowsPosition['hourArrow']} className="hourArrow" />
          </div>
          <div className="clock-center"></div>
        </div>
      )
    }
    
}