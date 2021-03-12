import { Component, Input } from "@angular/core";

@Component({
    selector: 'cielo-logo',
    templateUrl: 'logo.component.html',
    styleUrls: ['./logo.component.css']
})
export class LogoComponent {

    @Input() url = "";
}