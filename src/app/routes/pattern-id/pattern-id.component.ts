import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MdSlideToggleChange } from '@angular/material';
import { PatternService } from '../../services/pattern.service';
import { Pattern, Frame, PATTERNTYPE } from '../../classes/pattern';

@Component({
  selector: 'app-pattern-id',
  templateUrl: './pattern-id.component.html',
  styleUrls: ['./pattern-id.component.css']
})
export class PatternIdComponent implements OnInit {
  private isLoading: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private patternService: PatternService
  ) {
    this.isLoading = true;
  }

  async ngOnInit() {
    this.route.params.subscribe((data) => {
      this.patternService.get(data.id)
        .then((res) => {
          console.log('patternId', res);
          this.isLoading = false;

          this.router.navigate([`/pattern/${res.type.toLowerCase()}/`, res._id ]);
        })
        .catch((reason) => {
          this.isLoading = true;
        });
    });
  }
}
