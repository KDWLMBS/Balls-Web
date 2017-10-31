import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MdSlideToggleChange } from '@angular/material';
import { PatternService } from '../../services/pattern.service';
import { Pattern, Frame } from '../../classes/pattern';

@Component({
  selector: 'app-pattern-multiple',
  templateUrl: './pattern-multiple.component.html',
  styleUrls: ['./pattern-multiple.component.css']
})
export class PatternMultipleComponent implements OnInit {
  private pattern: Pattern;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private patternService: PatternService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((data) => {
      console.log('multiple', data);
      this.patternService.get(data.id)
      .then((res) => {
        console.log('patternMultiple', res);
        this.pattern = res;
      });
    });
  }

  save(ev) {
    this.patternService.save(this.pattern);
  }

  addFrame(e) {
    this.pattern.frames.push(new Frame());
  }
}
