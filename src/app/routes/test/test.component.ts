import { Component, OnInit } from '@angular/core';
import { PatternService, Pattern, PatternElement } from "../../services/pattern.service"

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  patternService: PatternService;
  pattern: Pattern;
  
  editable: boolean;
  elements: Array<PatternElement>;

  constructor(ps: PatternService) {
    this.patternService = ps;
    this.editable = true;
  }

  ngOnInit() {
    this.pattern = this.patternService.simPattern;
    this.elements = this.pattern.elements.slice();
  }

  handleElementsUpdated(pes: Array<PatternElement>) {
    console.log("Elements Updated:", pes);

    this.patternService.simPattern.elements = pes;
  }
}
