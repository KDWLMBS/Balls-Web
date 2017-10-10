import { Component, OnInit, Input } from '@angular/core';
import { Frame } from '../../classes/pattern';

@Component({
  selector: 'app-frames-preview',
  templateUrl: './frames-preview.component.html',
  styleUrls: ['./frames-preview.component.css']
})
export class FramesPreviewComponent implements OnInit {
  @Input() frames: Array<Frame>;

  currentIdx: number;
  frame: Frame;

  positions: Array<number>;
  deltaTime: number;

  constructor() {
    this.currentIdx = 0;
    this.deltaTime = 1000;
  }

  ngOnInit() {
    this.frame = this.frames[this.currentIdx];
    this.positions = [];
    for (let i = 0; i < this.frames[this.currentIdx].positions.length; i++) {
      this.positions.push(0);
    }

    setInterval(() => {
      setTimeout(() => {
        if (this.currentIdx >= this.frames.length - 1) {
          this.currentIdx = 0;
        } else {
          this.currentIdx++;
        }
      }, this.deltaTime);
    });
    setInterval(() => this.update(), this.deltaTime / 2);
  }

  update() {
    const next = this.frames[this.currentIdx];
    if (next) {
      for (let i = 0; i < this.positions.length; i++) {
        this.positions[i] = Math.floor(next.positions[i]);
      }
    }
  }

  lerp(start, end): number {
    const amt = 0.5;
    return (1 - amt) * start + amt * end;
  }
}
