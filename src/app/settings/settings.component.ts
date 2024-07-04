import { Component } from '@angular/core';
import { SideSetComponent } from "../side-set/side-set.component";


@Component({
    selector: 'app-settings',
    standalone: true,
    templateUrl: './settings.component.html',
    styleUrl: './settings.component.css',
    imports: [SideSetComponent]
})
export class SettingsComponent {

}
