import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { store } from './store';

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

window.onload = function() {
  onScrollApp();
};
window.onscroll = function(e) {
  onScrollApp();
}

// eslint-disable-next-line no-lone-blocks
{/*
  * Añade la clase "on-top" al body en caso no bajar el scroll.
  */}
let onScrollApp = function() {
  let body = document.getElementsByTagName('body')[0];
  if (0 == (window.pageYOffset || document.documentElement.scrollTop)) {
    body.classList.add("on-top");
  }
  else {
    body.classList.remove("on-top");
  }
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
