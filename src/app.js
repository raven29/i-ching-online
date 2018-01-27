import ReactDOM from 'react-dom';
import React from 'react';
import Canvas from './widgets/canvas';
import {generateStems} from './lib/utils';

const stems = generateStems();

ReactDOM.render(
  <Canvas stems={stems}/>,
  document.getElementById('root')
);