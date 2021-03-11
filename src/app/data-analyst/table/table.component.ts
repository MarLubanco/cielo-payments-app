import { Component, Input } from "@angular/core";

@Component({
    selector: 'cielo-table',
    templateUrl: 'table.component.html'
})
export class TableComponent {

    @Input() payments = []

    @Input() dataLanc = ""
    @Input() descricao = ""
    @Input() numero = ""
    @Input() dataConfirma = ""
    @Input() dadosBancarios = ""
    @Input() valorFinal = ""

    
}