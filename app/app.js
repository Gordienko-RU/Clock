import React from 'react';
import ReactDOM from 'react-dom';
import {Clock} from './clock/Clock.jsx';
import './style.css';

ReactDOM.render(
  <Clock className='clock-blue' />,
  document.getElementById('root')
)