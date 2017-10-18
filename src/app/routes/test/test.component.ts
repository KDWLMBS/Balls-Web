import { Component, OnInit, ViewChild } from '@angular/core';
import { PatternService } from '../../services/pattern.service';
import { Pattern } from '../../classes/pattern';

import * as mathjs from 'mathjs';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @ViewChild('canvasChart') myCanvas;
  data: { formula: string, minX: number, maxX: number, minY: number, maxY: number };

  chart: Chart;

  constructor(
    private patternService: PatternService
  ) {
    this.data = { formula: 'sin(x*pi/180)', minX: 0, maxX: 360, minY: -1000, maxY: 1000 };
  }

  getConf(): Chart.ChartConfiguration {
    return {
      type: 'line',
      data: {
        datasets: [{
          label: 'Chart'
        }]
      },
      options: {
        scales: {
          xAxes: [{
            ticks: {
              min: this.data.minX,
              max: this.data.maxX
            }
            // display: false
          }],
          yAxes: [{
            ticks: {
              min: this.data.minY,
              max: this.data.maxY
            }
            // display: false
          }]
        },
        elements: {
          point: {
            backgroundColor: 'red'
          },
          line: {
            borderColor: 'red'
          }
        },
        responsive: true,
        maintainAspectRatio: false
      }
    };
  }

  ngOnInit() {
    this.renewChart();
  }

  onChange(e) {
    this.renewChart();
  }

  onScaleChange(e) {
    this.renewChart();
  }

  renewChart() {
    if (this.chart) {
      this.chart.destroy();
      delete this.chart;
    }

    this.chart = new Chart(this.myCanvas.nativeElement, this.getConf());

    const data: Chart.ChartData = this.chart.data;
    const len = Math.abs(this.data.minX - this.data.maxX);

    for (let i = 0; i < 30; i++) {
      const num = Math.floor(1000 * mathjs.eval(this.data.formula, { x: this.data.minX + i * (len / 29) }));

      data.labels.push(i.toString());
      data.datasets[0].data[i] = num;
    }
    this.chart.update();
  }
}
