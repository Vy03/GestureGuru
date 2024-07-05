import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
    selector: 'app-lessons',
    standalone: true,
    templateUrl: './lessons.component.html',
    styleUrl: './lessons.component.css',
    imports: [SidebarComponent]
})
export class LessonsComponent {

}
