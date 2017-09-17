import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PatternService, Pattern, PatternElement } from "../../services/pattern.service"

@Component({
  selector: 'app-pattern',
  templateUrl: './pattern.component.html',
  styleUrls: ['./pattern.component.css'],
  inputs: ['editable', 'elements'],
  outputs: ['elementsUpdated()']
})
export class PatternComponent implements OnInit {
  private patternService: PatternService;

  @Input() editable: boolean;
  @Input() elements: Array<PatternElement>;
  @Output() elementsUpdated = new EventEmitter<any>();

  constructor(ps: PatternService) {
    this.patternService = ps;
  }

  ngOnInit() {  }

  handleValueUpdated(pe: PatternElement) {
    console.log('Update', pe);
    this.elements.find((ele) => ele.index == pe.index).value = pe.value;
    
    this.elementsUpdated.emit(this.elements);
  }
}
