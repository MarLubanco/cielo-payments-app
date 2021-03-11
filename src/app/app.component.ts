import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { TableService } from './data-analyst/table/table.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Teste Técnico - Cielo';

  dashboard: any = {}
  payments: any[] = []
  colors: any = []
  banks: any = []
  countBanks: number = 0
  values: any = []
  constructor(private tableService: TableService) {
  }

  ngOnInit(): void {
    this.tableService.getDashboard()
    .subscribe(dashboard => {
      this.dashboard = dashboard.percentPayment
      this.payments = dashboard.percentPayment.controleLancamentoList
      this.colors = [ 'rgba(255, 99, 132, 1)','rgba(54, 162, 235, 1)','rgba(255, 206, 86, 1)',"green", "grey", "red", "yellow"]
      this.banks = []
      this.countBanks= 0
      this.values = []
      dashboard.bankMorePopular.forEach((banco: { bank: any; quantity: any; }) => {
        this.banks.push(banco.bank)
        this.values.push(banco.quantity)
        this.countBanks++;
      }); 
      console.log("quantidade: " + this.values)
     this.colors = this.colors.slice(0, this.countBanks)
    })
    
  }
}
