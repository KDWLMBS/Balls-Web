import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-frames',
  templateUrl: './frames.component.html',
  styleUrls: ['./frames.component.scss'],
  inputs: ['editable', 'frames']
})
export class FramesComponent implements OnInit {
  
  @Input() editable: boolean;
  @Input() frames: Array<any>;

  constructor() {
    this.editable = true;
  }

  ngOnInit() {
  }

  handleElementsUpdated(pes: Array<any>) {
    console.log("Elements Updated:", pes);
  }
}
