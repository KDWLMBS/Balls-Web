import { Component, OnInit } from '@angular/core';
import { PatternService } from "../../services/pattern.service";

import { Pattern } from "../../classes/pattern";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private patterns: Pattern[];
  
  constructor(private patternService: PatternService) {
    this.patterns = new Array<Pattern>();
  }

  async ngOnInit() {
    let eles = await this.patternService.getAll()
      .then(res => {
        return res;
      });
    console.log(eles);
    eles.forEach(element => {
      this.patternService.get(element._id)
        .then(res => this.patterns.push(res));
    });
  }
}
