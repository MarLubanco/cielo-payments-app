import { Component, Input, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { ChartColor } from 'chart.js';
import { TableService } from '../table/table.service';

@Component({
  selector: 'cielo-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit{
  
  barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  @Input() label: string = ""
  @Input() type: string = ""
  canvas: any;
  ctx: any;
  banks: any = []
  countBanks: number = 0
  values: any = []
  colors: any = [ 'rgba(255, 99, 132, 1)','rgba(54, 162, 235, 1)','rgba(255, 206, 86, 1)',"green", "grey", "red", "yellow"]

  constructor(private tableService: TableService) {
  }

  ngOnInit(): void {
    this.tableService.getDashboard()
    .subscribe(dashboard => {
      this.banks = []
      this.countBanks= 0
      this.values = []
      dashboard.bankMorePopular.forEach((banco: { bank: any; quantity: any; }) => {
        this.banks.push(banco.bank)
        this.values.push(banco.quantity)
        this.countBanks++;
      }); 
     this.colors = this.colors.slice(0, this.countBanks)
    
     this.canvas = document.getElementById('myChart');
     this.ctx = this.canvas.getContext('2d');
     let myChart = new Chart(this.ctx, {
     type: this.type,
     data: {
         labels: this.banks,
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