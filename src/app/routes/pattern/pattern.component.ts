import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PatternService } from "../../services/pattern.service";
import { Pattern, Frame } from "../../classes/pattern";

@Component({
  selector: 'app-pattern',
  templateUrl: './pattern.component.html',
  styleUrls: ['./pattern.component.css']
})
export class PatternComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private patternService: PatternService
  ) { }

  private pattern: Pattern;

  async ngOnInit() {
    this.route.params.subscribe((data) => {
      this.patternService.get(data.id)
        .then((res) => {
          this.pattern = res;
        });
    });
    console.log('awaited pattern:', this.pattern);
  }

  save(ev) {
    this.patternService.save(this.pattern);
  }
}
