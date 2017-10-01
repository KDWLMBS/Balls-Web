import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Frame } from "../../classes/pattern";

@Component({
  selector: 'app-frames',
  templateUrl: './frames.component.html',
  styleUrls: ['./frames.component.css']
})
export class FramesComponent implements OnInit {
  _frames: Array<Frame>;
  @Input()
  get frames() {
    return this._frames;
  }

  @Output() framesChange = new EventEmitter();

  set frames(val) {
    if(!this._frames) this._frames = val;
    this.framesChange.emit(this._frames);
  }

  constructor() { }

  ngOnInit() { }

  addFrame(e) {
    this._frames.push(new Frame());
  }
}
