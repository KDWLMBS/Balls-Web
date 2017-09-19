import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pattern',
  templateUrl: './pattern.component.html',
  styleUrls: ['./pattern.component.css'],
  inputs: ['editable', 'elements'],
  outputs: ['elementsUpdated()']
})
export class PatternComponent implements OnInit {
  constructor() {
  }
  
  @Input() editable: boolean;
  @Input() elements: Array<any>;
  @Output() elementsUpdated = new EventEmitter<any>();

  ngOnInit() {  }

  handleValueUpdated(pe: any) {
    console.log('Update', pe);
    this.elements.find((ele) => ele.index == pe.index).value = pe.value;
    
    this.elementsUpdated.emit(this.elements);
  }
}
