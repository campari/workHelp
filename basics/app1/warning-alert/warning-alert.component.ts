import { Component } from '@angular/core';


@Component({
    selector: 'warning-alert',
    templateUrl: './warning-alert.component.html',
    styles: [`
        .btn{
            border-color: red;
            font-family: bold;
            color: red;
        }
    `]
})
export class WarningAlertComponent {

}