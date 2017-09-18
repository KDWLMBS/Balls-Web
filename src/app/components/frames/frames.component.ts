import { Component, OnInit, Input, Output } from '@angular/core';
import { PatternService, Pattern, PatternElement } from "../../services/pattern.service";

@Component({
  selector: 'app-frames',
  templateUrl: './frames.component.html',
  styleUrls: ['./frames.component.scss'],
  inputs: ['editable', 'frames']
})
export class FramesComponent implements OnInit {
  patternService: PatternService;
  
  @Input() editable: boolean;
  @Input() frames: Array<Pattern[]>;

  constructor(ps: PatternService) {
    this.patternService = ps;
    this.editable = true;
  }

  ngOnInit() {
  }

  handleElementsUpdated(pes: Array<PatternElement>) {
    console.log("Elements Updated:", pes);

    this.patternService.simPattern.elements = pes;
  }
}
