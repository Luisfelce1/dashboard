import { Component } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component  {

   titulo: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];

   data1: ChartData<'doughnut'> = {
    labels: this.titulo,
    datasets: [
      { data: [ 500, 450, 100 ],
        backgroundColor: [ '#6857E6', '#009FEE', '#F02059' ],
      }
    ]
  };
   

  

}
