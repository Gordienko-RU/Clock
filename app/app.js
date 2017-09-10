import React from 'react';
import ReactDOM from 'react-dom';
import {Clock} from './clock.js';


ReactDOM.render(
  <Clock option={{
    size: '100px'
  }}/>,
  document.querySelector('#root')
)