import {observable, action, when} from 'mobx';
import {computedFn} from 'mobx-utils';

class AppState {
  @observable count = 0;
  @observable unit = "C";
  @observable temperatureCelcius = [];
  @observable loading = "Asynchronous operation happening... "
  constructor() {
    this.temperatureCelcius.push(35);
    this.temperatureCelcius.push(30);
    when(
      () => this.temperatureCelcius.some((t) => t==25),
      () => alert("When mobx-reaction completed, when will now stop listening")
    );
  }

  temperatureKelvin = computedFn(function temperatureKelvin(index){
    return this.temperatureCelcius[index] * (9/5) + 32
  })

  temperatureFahrenheit = computedFn(function (index) {
    return this.temperatureCelcius[index] + 273.15
  })

   temperature = computedFn(function (index) {
    switch(this.unit) {
      case "K": return this.temperatureKelvin[index]
      case "F": return this.temperatureFahrenheit[index]
      case "C": return this.temperatureCelcius[index]
    }
  })

  @action increment = () => {
    this.count++;
  }

  decrement = () => {
    this.count--;
  }
}

export default new AppState();
