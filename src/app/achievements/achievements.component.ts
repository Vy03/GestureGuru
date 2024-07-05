import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
    selector: 'app-achievements',
    standalone: true,
    templateUrl: './achievements.component.html',
    styleUrl: './achievements.component.css',
    imports: [SidebarComponent]
})
export class AchievementsComponent {

}
