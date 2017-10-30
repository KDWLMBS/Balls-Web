import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pattern, PATTERNTYPE, ANIMATIONTYPE } from '../../classes/pattern';
import { PatternService } from '../../services/pattern.service';

@Component({
  selector: 'app-pattern',
  templateUrl: './pattern.component.html',
  styleUrls: ['./pattern.component.css']
})
export class PatternComponent implements OnInit {
  pTypes: Array<{ key: number, value: string }>;
  aTypes: Array<{ key: number, value: string }>;

  data: {
    points: Array<number>,
    name: string,
    ptype: number,
    atype: number
  };

  constructor(
    private router: Router,
    private patternService: PatternService
  ) {
    this.data = {
      points: [],
      name: '',
      ptype: undefined,
      atype: undefined
    };

    this.pTypes = [];
    for (const item in PATTERNTYPE) {
      if (isNaN(Number(item))) {
        this.pTypes.push({ key: Number(PATTERNTYPE[item]), value: item });
        console.log(PATTERNTYPE[item], item);
      }
    }

    this.aTypes = [];
  }

  ngOnInit() {
    const dummy: Array<number> = new Array<number>();
    for (let i = 0; i < 30; i++) {
      dummy.push(i * (1 / 29));
    }

    this.data.points = dummy;
  }

  typeChanged(ev) {
    this.aTypes.splice(0, this.aTypes.length);
    switch (this.data.ptype) {
      case PATTERNTYPE.SINGLE:
        this.aTypes.push({ key: Number(ANIMATIONTYPE.STATIC), value: ANIMATIONTYPE[0] });
        this.aTypes.push({ key: Number(ANIMATIONTYPE.SHIFTING), value: ANIMATIONTYPE[1] });
        break;
      case PATTERNTYPE.MULTIPLE:
      this.aTypes.push({ key: Number(ANIMATIONTYPE.STATIC), value: ANIMATIONTYPE[0] });
        break;
    }
  }


  save(ev) {
    // check if parameters are set and create new pattern + save it, also redirect to dashboard
    if (
      this.data.name &&
      typeof this.data.ptype === 'number' &&
      typeof this.data.atype === 'number'
      ) {
        const pat = new Pattern();
        pat.type = PATTERNTYPE[this.data.ptype];
        pat.shift = this.data.atype === ANIMATIONTYPE.SHIFTING ? true : false;
        this.patternService.add(pat)
          .then(res => {
            this.router.navigate(['/pattern', res._id ]);
          });
        // check if save was succesful
    }
  }
}
