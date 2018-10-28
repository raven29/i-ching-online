import ReactDOM from 'react-dom';
import React from 'react';
import Canvas from './components/canvas';
import {generateStems} from './lib/utils';

const stems = generateStems();

ReactDOM.render(
  <Canvas stems={stems}/>,
  document.getElementById('root')
);