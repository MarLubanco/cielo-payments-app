import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';

import { LogoComponent } from "./logo/logo.component";
import { TableComponent } from "./table/table.component";
import { BarchartComponent } from './barchart/barchart.component';
import { DoughnutchartComponent } from './doughnutchart/doughnutchart.component';

@NgModule({
    declarations: [LogoComponent, TableComponent, BarchartComponent, DoughnutchartComponent],
    exports: [LogoComponent, TableComponent, BarchartComponent, DoughnutchartComponent ],
    imports: [HttpClientModule]
})
export class DataAnalyst {
    
}