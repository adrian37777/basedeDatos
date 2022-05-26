import { Component } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.css'],
})
export class Grafica1Component {
  public doughnutChartLabels1: string[] = ['Pan', 'Refrescos', 'Tacos'];

  public doughnutChartData1: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels1,
    datasets: [{ data: [10, 20, 15] }],
  };
}
