import { Component, OnInit } from '@angular/core';
import { PatternService } from "../../services/pattern.service";
import { Router } from "@angular/router";

import { Pattern } from "../../classes/pattern";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private patterns: Pattern[];
  
  constructor(
    private router: Router,
    private patternService: PatternService
  ) {
    this.patterns = new Array<Pattern>();
  }

  async ngOnInit() {
    let eles = await this.patternService.getAll()
      .then(data => {
        console.log(`received ->`, data);
        return data;
      });

    eles.forEach(ele => {
      this.patternService.get(ele._id)
        .then(data => {
          this.patterns.push(data);
        })
    });
  }

  newPattern() {
    let pattern = new Pattern();
    this.patternService.save(pattern);
    // Todo: Just push when save was succesfull
    this.patterns.push(pattern);
  }

  edit(pattern: Pattern) {
    this.router.navigate(['/pattern', { id: pattern._id }]);
  }
  
  delete(pattern: Pattern) {
    // Todo: add dialog (Do you really want to delete {pattern_name}?)
    let idx = this.patterns.indexOf(pattern);
    if(idx > -1){
      this.patterns.splice(idx, 1);
      this.patternService.delete(pattern);
    }
  }
}
