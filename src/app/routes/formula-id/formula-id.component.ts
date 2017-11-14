import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MdSlideToggleChange } from '@angular/material';
import { FormulaService } from '../../services/formula.service';
import { Formula, SHIFTDIRECTION } from '../../classes/pattern';
import * as mathjs from 'mathjs';

@Component({
  selector: 'app-formula-id',
  templateUrl: './formula-id.component.html',
  styleUrls: ['./formula-id.component.css']
})
export class FormulaIdComponent implements OnInit {
  private formula: Formula;
  private points: number[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formulaService: FormulaService
  ) {
    this.points = [];
  }

  async ngOnInit() {
    this.route.params.subscribe((data) => {
      this.formulaService.get(data.id)
        .then((res) => {
          console.log('formulaId', res);

           this.formula = res;
        })
        .then(() => {
          this.draw();
        });
      });
  }

  draw() {
    const len = Math.abs(this.formula.minX - this.formula.maxX);

    for (let i = 0; i < 30; i++) {
      const num = Math.floor(1000 * mathjs.eval(this.formula.formula, { x: this.formula.minX + i * (len / 30) }));

      this.points.push(num);
    }
  }

  onChange(ev) {
    this.draw();
  }

  slideChange(e: MdSlideToggleChange) {
    console.log(e);
    this.formula.shift = e.checked ? true : false;
    console.log(this.formula.shift);
    // this.draw();
  }
}
