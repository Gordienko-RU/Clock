import React from 'react';
import ReactDOM from 'react-dom';
import {Clock} from './clock/clock.jsx';
import './style.css';

ReactDOM.render(
  <Clock className='clock-blue' />,
  document.getElementById('root')
)