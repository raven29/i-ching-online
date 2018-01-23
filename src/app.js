import ReactDOM from 'react-dom';
import React from 'react';
import Canvas from './widgets/canvas';
import {getInitialState} from './lib/utils';

const initialState = getInitialState();

ReactDOM.render(
  <Canvas initialState={initialState}/>,
  document.getElementById('root')
);