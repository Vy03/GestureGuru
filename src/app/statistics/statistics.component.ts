import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
    selector: 'app-statistics',
    standalone: true,
    templateUrl: './statistics.component.html',
    styleUrl: './statistics.component.css',
    imports: [SidebarComponent]
})
export class StatisticsComponent {

}
