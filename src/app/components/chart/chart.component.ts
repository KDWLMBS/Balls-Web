import { Component, OnInit, OnChanges, ViewChild, Input } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, OnChanges {
  @ViewChild('canvasChart') myCanvas;
  @Input() points: Array<number>;
  @Input() minX: number;
  @Input() maxX: number;
  @Input() minY: number;
  @Input() maxY: number;

  private chart: Chart;

  constructor() {
    this.points = new Array();
  }

  ngOnInit() {
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
  }
}
