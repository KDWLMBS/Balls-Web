import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vertical-slider',
  templateUrl: './vertical-slider.component.html',
  styleUrls: ['./vertical-slider.component.scss']
})
export class VerticalSliderComponent implements OnInit {
  _value: number;
  @Input()
  get value() {
    return this._value;
  }

  @Output() valueChange = new EventEmitter();
  // Also add valueInput as Output for socket simulation

  set value(val) {
    this._value = val;
    this.valueChange.emit(this._value);
  }

  constructor() { }

  ngOnInit() {
    debugger;
  }

  onChange(e) {
    this.value = e.value;
  }

  onInput(e) {
    // emit event to valueInput
  }
}
