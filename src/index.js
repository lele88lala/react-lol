// import _ from 'lodash';

// require('./styles/main.scss');

// function component() {
//   console.log('debug');
//   const element = document.createElement('div');

//   // Lodash, currently included via a script, is required for this line to work
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//   // element.innerHTML = "Hello webpack";
//   return element;
// }

// document.body.appendChild(component());

import React from 'react';
import ReactDOM from 'react-dom';
import HelloReact from './components/HelloReact';
import './styles/main.scss';
// ReactDOM.render(
//   <h1>
//     Hello, world!
//   </h1>,
//   document.getElementById('root'),
// );
ReactDOM.render(
  <div>
    <HelloReact />
    <HelloReact />
    <HelloReact text="World" />
    <HelloReact text="Bai" />
    <HelloReact />
  </div>,
  document.getElementById('root'),
);