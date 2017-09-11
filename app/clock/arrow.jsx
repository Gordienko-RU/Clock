import React from 'react';

export function Arrow(props) {
    return(
      <div className={"arrow " + props.className} style={{
        transform: 'rotate(' + props.angle + 'deg)',
      }}>
       <div className="visible-part"></div>
      </div>
    )
}