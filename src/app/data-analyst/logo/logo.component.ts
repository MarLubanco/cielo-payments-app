import { Component, Input } from "@angular/core";

@Component({
    selector: 'cielo-logo',
    templateUrl: 'logo.component.html'
})
export class LogoComponent {

    @Input() url = "";
}