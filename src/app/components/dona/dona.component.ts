import { Component, Input } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: [],
})
export class DonaComponent {
  @Input() title = 'Sin titulo';

  public doughnutChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];
  @Input() doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [{ data: [350, 450, 100] }],
  };
  public doughnutChartType: ChartType = 'doughnut';
}
