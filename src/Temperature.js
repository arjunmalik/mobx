import React, { Component } from 'react';
import {observer} from 'mobx-react';
import DevTools  from 'mobx-react-devtools';
import TemperatureView from './TemperatureView';

@observer export default class Temperature extends Component {
    constructor(props) {
      super(props);
      setTimeout(() => this.props.store.loading = 'Asynchronous event completed :)', 2500);
    }
    inputChange(e, i){
      this.props.store.temperatureCelcius[i] = e.target.value;
    }

    addTemperatureCalculator = () => {
      this.props.store.temperatureCelcius.push(25);
    }

    render() {
      const tempArrayComponents = this.props.store.temperatureCelcius.map((temp, i) =>{
        return (
        <TemperatureView store={this.props.store} key={i} i={i}/>
      )});
      return(
        <div>
        <p> {this.props.store.loading} </p>
        <hr/>
        {tempArrayComponents}
        <button onClick={this.addTemperatureCalculator}> ADD TEMPERATRE CALCULATOR </button>
        </div>
      );
    }
}
