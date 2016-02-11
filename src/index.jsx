import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/Hello.jsx';

var mountPoint = document.getElementById('body-mount-point');
ReactDOM.render(<Hello />, mountPoint);
