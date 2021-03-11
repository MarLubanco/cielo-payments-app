import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { TableService } from '../table/table.service';

@Component({
  selector: 'cielo-doughnutchart',
  templateUrl: './doughnutchart.component.html',
  styleUrls: ['./doughnutchart.component.css']
})
export class DoughnutchartComponent implements OnInit {

  barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  @Input() label: string = ""
  @Input() type: string = ""
  canvas: any;
  ctx: any;
  dashboard: any = {}
  payments: any[] = []
  labels: any = ["Pagas", "Pendentes"]
  countBanks: number = 0
  values: any = []
  colors: any = [ 'rgba(255, 99, 132, 1)','rgba(54, 162, 235, 1)','rgba(255, 206, 86, 1)',"green", "grey", "red", "yellow"]

  constructor(private tableService: TableService) {
  }

  ngOnInit(): void {
    this.tableService.getDashboard()
    .subscribe(dashboard => {
      this.dashboard = dashboard.percentPayment
      this.payments = dashboard.percentPayment.controleLancamentoList
      this.countBanks= 0
      this.values = []
      const {paymentsPaid, totalPayments} = dashboard.percentPayment;
      this.values.push(paymentsPaid)
      this.values.push(totalPayments - paymentsPaid)
      this.colors = this.colors.slice(0, 2)
    
     this.canvas = document.getElementById('secondChart');
     this.ctx = this.canvas.getContext('2d');
     let myChart = new Chart(this.ctx, {
     type: this.type,
     data: {
         labels: this.labels,
         datasets: [{
             data: this.values,
             backgroundColor: this.colors,
             borderWidth: 1
         }]
     },
     options: this.barChartOptions
   });
   })
  }
}
