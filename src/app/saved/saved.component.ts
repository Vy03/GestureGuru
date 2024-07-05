import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
    selector: 'app-saved',
    standalone: true,
    templateUrl: './saved.component.html',
    styleUrl: './saved.component.css',
    imports: [SidebarComponent]
})
export class SavedComponent {

}
