import React, { Component } from 'react';
import {observer} from 'mobx-react';

@observer export default class TemperatureView extends Component {
  inputChange(e, i){
    this.props.store.temperatureCelcius[i] = e.target.value;
  }

  render() {
    return (
      <div>
        Temperature in Celcius
        <input
          type="text"
          defaultValue={this.props.store.temperature(this.props.i)}
          onChange={(e) => this.inputChange(e, this.props.i)}>
        </input>
        <p> Temperature in Fahrenheit {this.props.store.temperatureFahrenheit(this.props.i)} </p>
        <p> Temperature in Kelvin {this.props.store.temperatureKelvin(this.props.i)} </p>
        <hr/>
      </div>
    );
  }
}
