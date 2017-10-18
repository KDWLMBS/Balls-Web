import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MdSlideToggleChange } from '@angular/material';
import { PatternService } from '../../services/pattern.service';
import { Pattern, Frame } from '../../classes/pattern';

@Component({
  selector: 'app-pattern-id',
  templateUrl: './pattern-id.component.html',
  styleUrls: ['./pattern-id.component.css']
})
export class PatternIdComponent implements OnInit {
  private isLoading: boolean;
  private pattern: Pattern;
  private checked: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private patternService: PatternService
  ) {
    this.isLoading = true;
    this.checked = false;
  }

  async ngOnInit() {
    this.route.params.subscribe((data) => {
      this.patternService.get(data.id)
        .then((res) => {
          this.pattern = res;
          this.isLoading = false;
        })
        .catch((reason) => {
          this.isLoading = false;
        });
    });
  }

  save(ev) {
    this.patternService.save(this.pattern);
  }

  addFrame(e) {
    this.pattern.frames.push(new Frame());
  }

  slideChange(e: MdSlideToggleChange) {
    if (e.checked) {
      this.patternService.play(this.pattern._id);
    }
  }
}
