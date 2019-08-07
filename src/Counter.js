import React, { Component } from 'react';
import {observer} from 'mobx-react';
import DevTools  from 'mobx-react-devtools';

@observer export default class Counter extends Component {
  handleDec = () => {
    this.props.store.increment();
  };
  handleInc = () => {
    this.props.store.decrement();
  }
  render() {
    return (
      <div>
       Counter: {this.props.store.count}
       <button onClick= {this.handleInc}> - </button>
       <button onClick= {this.handleDec}> + </button>
      </div>
    );
  }
}
