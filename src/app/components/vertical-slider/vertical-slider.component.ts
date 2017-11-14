import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vertical-slider',
  templateUrl: './vertical-slider.component.html',
  styleUrls: ['./vertical-slider.component.scss']
})
export class VerticalSliderComponent implements OnInit {
  @Input() disabled: boolean;
  @Input() index: number;
  @Input() value: number;
  @Output() valueChange = new EventEmitter();

  // _value: number;
  // @Input()
  // get value() {
  //   return this._value;
  // }

  // @Output() valueChange = new EventEmitter();

  // set value(val) {
  //   this._value = val;
  //   this.valueChange.emit(val);
  // }

  constructor() {
    this.disabled = false;
  }

  ngOnInit() { }

  onChange(e) {
    // this.value = e.value;
    console.log(this.index, this.value);
    this.valueChange.emit({ index: this.index, value: e.value });
  }

  onInput(e) {
    // onChange is just changing the value on mouseup
    // this.value = e.value;
  }
}
