import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import Temperature from './Temperature';
import {observable} from 'mobx';
import appState from './store';

ReactDOM.render(
  <div>
    <Counter store={appState}/>
    <Temperature store={appState}/>
  </div>
  , document.getElementById('root'));
