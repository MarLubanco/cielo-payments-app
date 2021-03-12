import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from "@angular/common";

import { LogoComponent } from "./logo/logo.component";
import { TableComponent } from "./table/table.component";
import { PiechartComponent } from './piechart/piechart.component';
import { BarchartComponent } from './doughnutchart/barchart.component';

@NgModule({
    declarations: [LogoComponent, TableComponent, PiechartComponent, BarchartComponent],
    exports: [LogoComponent, TableComponent, PiechartComponent, BarchartComponent ],
    imports: [CommonModule, HttpClientModule]
})
export class DataAnalyst {
    
}