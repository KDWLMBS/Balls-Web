import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pattern',
  templateUrl: './pattern.component.html',
  styleUrls: ['./pattern.component.css']
})
export class PatternComponent implements OnInit {
  points: Array<number>;
  step = 0;

  constructor() {
    this.points = new Array();
  }

  ngOnInit() {
    // const data: Chart.ChartData = this.chart.data;

    const dummy: Array<number> = new Array<number>();
    for (let i = 0; i < 30; i++) {
      // const num = Math.floor(1000 * mathjs.eval(this.data.formula, { x: this.data.minX + i * (len / 29) }));

      dummy.push(i * (1 / 29));

      // data.labels.push(i.toString());
      // data.datasets[0].data[i] = num;
    }

    this.points = dummy;
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
