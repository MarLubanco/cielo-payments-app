import { Component, Input, OnInit } from "@angular/core";
import { TableService } from "./table.service";

@Component({
    selector: 'cielo-table',
    templateUrl: 'table.component.html'
})
export class TableComponent implements OnInit{

    payments = []

    constructor(private tableService: TableService) {
    }
    
    ngOnInit(): void {
        this.tableService.getDashboard()
        .subscribe(dashboard => {
          this.payments = dashboard.percentPayment.controleLancamentoList
        })

        console.log(this.payments)
        
    }
    
}