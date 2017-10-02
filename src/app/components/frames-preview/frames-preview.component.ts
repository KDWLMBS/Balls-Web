import { Component, OnInit, Input } from '@angular/core';
import { Frame } from '../../classes/pattern';

@Component({
  selector: 'app-frames-preview',
  templateUrl: './frames-preview.component.html',
  styleUrls: ['./frames-preview.component.css']
})
export class FramesPreviewComponent implements OnInit {
  @Input() frames: Array<Frame>;
  frame: Frame;
  currentIdx: number;

  constructor() {
    this.currentIdx = 0;
  }

  ngOnInit() {
    setInterval(() => this.update(), 100);
  }

  update() {
    if (this.currentIdx > this.frames.length) {
      this.currentIdx = 0;
    } else {
      this.currentIdx += 1;
    }

    this.frame.positions.values()
  }
}
