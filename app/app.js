import React from 'react';
import ReactDOM from 'react-dom';
import {Clock} from './clock/clock.jsx';
import style from './style.css';

ReactDOM.render(
  <Clock className='clock-blue' />,
  document.querySelector('#root')
)