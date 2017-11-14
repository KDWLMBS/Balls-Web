import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formula, ANIMATIONTYPE, SHIFTDIRECTION } from '../../classes/pattern';
import { FormulaService } from '../../services/formula.service';

@Component({
  selector: 'app-formula',
  templateUrl: './formula.component.html',
  styleUrls: ['./formula.component.css']
})
export class FormulaComponent implements OnInit {
  aTypes: Array<{ key: number, value: string }>;

  data: {
    points: Array<number>,
    name: string,
    atype: number,
    formula: string,
    minX: number,
    maxX: number,
    minY: number,
    maxY: number,
    direction: string,
    duration: number
  };

  constructor(
    private router: Router,
    private formulaService: FormulaService
  ) {
    this.data = {
      points: [],
      name: '',
      atype: undefined,
      formula: '',
      minX: 0,
      maxX: 360,
      minY: -1000,
      maxY: 1000,
      direction: SHIFTDIRECTION[0],
      duration: 100
    };

    this.aTypes = [];
    for (const item in ANIMATIONTYPE) {
      if (isNaN(Number(item))) {
        this.aTypes.push({ key: Number(ANIMATIONTYPE[item]), value: item });
        console.log(ANIMATIONTYPE[item], item);
      }
    }
  }

  ngOnInit() { }

  change(ev) {
    const dummy: Array<number> = new Array<number>();
    for (let i = 0; i < 30; i++) {
      dummy.push(i * (1 / 29));
    }

    this.data.points = dummy;
  }

  save(ev) {
    // check if parameters are set and create new pattern + save it, also redirect to dashboard
    if (
      this.data.name &&
      typeof this.data.atype === 'number' &&
      this.data.formula
      ) {
        const fml = new Formula(this.data.name);
        fml.formula = this.data.formula;
        fml.minX = this.data.minX;
        fml.maxX = this.data.maxX;
        fml.minY = this.data.minY;
        fml.maxY = this.data.maxY;
        fml.shift = this.data.atype === ANIMATIONTYPE.SHIFTING ? true : false;
        fml.shiftDirection = this.data.direction;
        fml.shiftDuration = this.data.duration;
        this.formulaService.add(fml)
          .then(res => {
            if (res) {
              this.router.navigate(['/formula', res._id ]);
            }
          });
        // check if save was succesful
    }
  }
}
