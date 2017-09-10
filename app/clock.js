import React from 'react';
import ReactDOM from 'react-dom';

function Arrow(props) {
    return(
      <div className="arrow" style={{
        transform: 'rotate(' + props.style.angle + 'deg)',
        height: props.style.height + '%',
        zIndex: props.style.positionRaiting
      }}>
       <div className="visible-part"></div>
      </div>
    )
}

function ArrowContainer(props) {
    return(
     <div className="arrow-wrapper">
        <Arrow style={{
          angle: props.arrowPosition[0],
          height: props.style[0][0],
          positionRaiting:props.style[0][1]}}
        />
        <Arrow style={{
          angle: props.arrowPosition[1],
          height: props.style[1][0],
          positionRaiting:props.style[1][1]}}
        />
        <Arrow style={{
          angle: props.arrowPosition[2],
          height: props.style[2][0],
          positionRaiting:props.style[2][1]}}
        />
     </div>
    )
}


export class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arrowPosition: getStartPosition()
        }
    }
    
    componentDidMount() {
        this.secTimer = setInterval(
          () => this.moveSecondArrow(), 1000
        )
        
        this.minTimer = setInterval(
          () => this.moveMinuteArrow(), 60000
        )
        
        this.secTimer = setInterval(
          () => this.moveHourArrow(), 3600000
        )
    }
    
    moveSecondArrow() {
        this.setState((prevState, props) => {
            return {arrowPosition: [(prevState.arrowPosition[0] !== 360 ?                                               prevState.arrowPosition[0] + 6 : 6),
                                    prevState.arrowPosition[1],
                                    prevState.arrowPosition[2]]
                   }
        })
    }
    
     moveMinuteArrow() {
        this.setState((prevState, props) => {
            return {arrowPosition: [prevState.arrowPosition[0],
                                    prevState.arrowPosition[1] !== 360 ?
                                    prevState.arrowPosition[1] + 6 : 6,
                                    prevState.arrowPosition[2]]
                   }
        })
    }
    
     moveHourArrow() {
        this.setState((prevState, props) => {
            return {arrowPosition: [prevState.arrowPosition[0],
                                    prevState.arrowPosition[1],
                                    prevState.arrowPosition[2] !== 360 ?
                                    prevState.arrowPosition[2] + 30 : 30]
                   }
        })
    }
    
    render() {
      return(
        <div className="clock" style={{
          width: this.props.option.size,
          height: this.props.option.size
        }}>
          <ArrowContainer arrowPosition={this.state.arrowPosition} style={
            [
              [98, 2],
              [90, 3],
              [80, 4]
            ]
          } />
           <div className="clock-center"></div>
        </div>
      )
    }
    
}

function getStartPosition() {
    const currentDate = new Date();
    let startPositions =[];
    startPositions.push(currentDate.getSeconds() * 6);
    startPositions.push(currentDate.getMinutes() * 6);
    startPositions.push(currentDate.getHours() > 12 ? (currentDate.getHours() - 12) * 30 : currentDate.getHours() * 30);
    return(startPositions);
};

