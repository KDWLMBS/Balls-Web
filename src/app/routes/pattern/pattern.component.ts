import { Component, OnInit } from '@angular/core';
import { PATTERNTYPE, ANIMATIONTYPE } from './../../classes/pattern';

@Component({
  selector: 'app-pattern',
  templateUrl: './pattern.component.html',
  styleUrls: ['./pattern.component.css']
})
export class PatternComponent implements OnInit {
  aTypes: Array<any>;
  pTypes: Array<any>;

  data: {
    points: Array<number>,
    name: string,
    ptype: PATTERNTYPE,
    atype: ANIMATIONTYPE
  };

  constructor() {
    this.data = {
      points: [],
      name: '',
      ptype: PATTERNTYPE.single,
      atype: ANIMATIONTYPE.static
    };

    this.pTypes = [];
    for (const item in PATTERNTYPE) {
      if (isNaN(Number(item))) {
        this.pTypes.push({ key: PATTERNTYPE[item], value: item });
        console.log(PATTERNTYPE[item], item);
      }
    }

    this.aTypes = [];
    for (const item in ANIMATIONTYPE) {
      if (isNaN(Number(item))) {
        this.aTypes.push({ key: ANIMATIONTYPE[item], value: item });
        console.log(ANIMATIONTYPE[item], item);
      }
    }
  }

  ngOnInit() {
    const dummy: Array<number> = new Array<number>();
    for (let i = 0; i < 30; i++) {
      // const num = Math.floor(1000 * mathjs.eval(this.data.formula, { x: this.data.minX + i * (len / 29) }));

      dummy.push(i * (1 / 29));

      // data.labels.push(i.toString());
      // data.datasets[0].data[i] = num;
    }

    this.data.points = dummy;
  }
}
