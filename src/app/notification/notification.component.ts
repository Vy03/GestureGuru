import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
    selector: 'app-notification',
    standalone: true,
    templateUrl: './notification.component.html',
    styleUrl: './notification.component.css',
    imports: [SidebarComponent]
})
export class NotificationComponent {

}
