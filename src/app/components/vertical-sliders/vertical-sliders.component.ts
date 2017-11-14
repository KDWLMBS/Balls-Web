import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MdSliderChange } from '@angular/material';

@Component({
  selector: 'app-vertical-sliders',
  templateUrl: './vertical-sliders.component.html',
  styleUrls: ['./vertical-sliders.component.scss']
})
export class VerticalSlidersComponent implements OnInit {
  local: number[];

  _positions: number[];
  @Input()
  get positions() {
    return this._positions;
  }

  @Output() positionsChange = new EventEmitter();

  set positions(val) {
    if (!this._positions) {
      this._positions = val;
    }
    this.positionsChange.emit(this._positions);
  }

  constructor() {
    this.local = [];
  }

  ngOnInit() {
    this.local = this.positions.slice(0, this.positions.length);
  }

  onChange(i, e: MdSliderChange) {
    console.log(i, e.value);
  }

  onInput(i, e: MdSliderChange) {
    this.positions[i] = e.value;
  }
}
