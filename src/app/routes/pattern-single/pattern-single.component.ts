import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MdSlideToggleChange } from '@angular/material';
import { PatternService } from '../../services/pattern.service';
import { Pattern, Frame } from '../../classes/pattern';

@Component({
  selector: 'app-pattern-single',
  templateUrl: './pattern-single.component.html',
  styleUrls: ['./pattern-single.component.css']
})
export class PatternSingleComponent implements OnInit {
  private pattern: Pattern;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private patternService: PatternService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((data) => {
      console.log('single', data);
      this.patternService.get(data.id)
      .then((res) => {
        console.log('patternSingle', res);
        this.pattern = res;
      });
    });
  }

  save(ev) {
    this.patternService.save(this.pattern);
  }
  
  slideChange(e: MdSlideToggleChange) {
    if (e.checked) {
      this.patternService.play(this.pattern._id);
    }
  }
}
