import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PatternElement } from "../../services/pattern.service";


@Component({
  selector: 'app-vertcial-slider',
  templateUrl: './vertcial-slider.component.html',
  styleUrls: ['./vertcial-slider.component.scss'],
  inputs: ['editable', 'element'],
  outputs: ['valueUpdated()']
})
export class VertcialSliderComponent implements OnInit {
  @Input() editable: boolean;
  @Input() element: PatternElement | null;
  @Output() valueUpdated = new EventEmitter();

  disabled: string;

  constructor() {}

  ngOnInit() {
    console.log(this.element);
    if(!this.editable) this.disabled = 'disabled';
  }

  onInputChange(ev) { //add debounce to improve performance
    console.log(this.element.index, ev);

    let pe: PatternElement = { index: this.element.index, value: ev.value };
    this.valueUpdated.emit(pe);
  }
}
