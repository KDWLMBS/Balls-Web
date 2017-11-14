import { Component, OnInit, OnChanges, OnDestroy, ViewChild, Input } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnChanges, OnDestroy {
  @ViewChild('canvasChart') myCanvas;
  @Input() points: Array<number>;
  @Input() minX: number;
  @Input() maxX: number;
  @Input() minY: number;
  @Input() maxY: number;
  @Input() shift: boolean;

  private chart: Chart;

  private frameCounter: number;
  private lastFrame: number;
  private destroyed: boolean;

  constructor() {
    this.points = new Array();
    this.shift = false;
    this.frameCounter = 0;
    this.lastFrame = null;
    this.destroyed = false;
  }


  ngOnChanges() {
    if (this.chart) {
      this.chart.destroy();
      delete this.chart;
    }

    this.chart = new Chart(this.myCanvas.nativeElement, {
      type: 'line',
      data: {
        datasets: [{
          label: 'Chart'
        }]
      },
      options: {
        showLines: false,
        legend: {
          display: false
        },
        tooltips: {
          enabled: false
        },
        scales: {
          xAxes: [{
            ticks: {
              min: this.minX,
              max: this.maxX
            }
            // display: false
          }],
          yAxes: [{
            ticks: {
              min: this.minY,
              max: this.maxY
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
    });

    const data: Chart.ChartData = this.chart.data;
    for (let i = 0; i < this.points.length; i++) {
      data.labels.push(i.toString());
      data.datasets[0].data[i] = this.points[i];
    }

    this.chart.update();

    if (this.shift) {
        this.doShift();
    }
  }

  ngOnDestroy() {
    alert('destroyed');
    this.destroyed = true;
  }

  doShift() {
    if (this.chart) {
        if (this.lastFrame) {
          console.log(`ElapsedTime: ${Date.now() - this.lastFrame}`);
        }

        this.lastFrame = Date.now();

        this.frameCounter++;
        if (this.frameCounter % 5 === 0) {
          this.chart.data.datasets[0].data[30] = this.chart.data.datasets[0].data[0];
          for (let i = 0; i < 30; i++) {
            this.chart.data.datasets[0].data[i] = this.chart.data.datasets[0].data[i + 1];
          }
          this.chart.update();
        }
        if (this.shift && !this.destroyed) {
          requestAnimationFrame(() => {
            this.doShift();
          });
        }
      }
  }
}
