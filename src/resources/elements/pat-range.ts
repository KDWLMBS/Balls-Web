import {bindable} from 'aurelia-framework';

export class PatRange {
  @bindable min;
  @bindable max;
  @bindable step;
  @bindable value;

  valueChanged(newValue, oldValue) {
    console.log(newValue, oldValue);
  }
}

