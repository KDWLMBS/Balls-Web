import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Frame } from "../../classes/pattern";

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit {
  _frame: Frame;
  @Input()
  get frame() {
    return this._frame;
  }

  @Output() frameChange = new EventEmitter();
  // Also add valueInput as Output for socket simulation

  set frame(val) {
    debugger;
    if(!this._frame) this._frame = val;
    this.frameChange.emit(this._frame);
  }

  constructor() { }

  ngOnInit() { }
}
