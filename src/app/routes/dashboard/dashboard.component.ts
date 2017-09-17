import { Component, OnInit } from '@angular/core';
import { PatternService, Pattern } from "../../services/pattern.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private patternService: PatternService;

  editable: Boolean;
  patterns: Array<Pattern>;

  constructor(ps: PatternService) {
    this.patternService = ps;

    this.editable = false;
    this.patterns = new Array<Pattern>();
  }

  ngOnInit() {
    this.patternService.getPatterns()
      .then((res) => {
        this.patterns = res;
      });
  }
}
