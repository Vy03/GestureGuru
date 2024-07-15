import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
    selector: 'app-achievements',
    standalone: true,
    templateUrl: './achievements.component.html',
    styleUrl: './achievements.component.css',
    imports: [SidebarComponent, CommonModule]
})
export class AchievementsComponent {
    achievements = [
        {
          title: 'Novice',
          progress: '',
          description: 'Attempted 3 lessons'
        },
        {
          title: 'Rookie',
          progress: '',
          description: 'Attempted 5 lessons'
        },
        {
          title: 'Junior',
          progress: '',
          description: 'Attempted 7 lessons'
        },
        {
          title: 'Seasoned',
          progress: '',
          description: 'Attempted 9 lessons'
        },
        {
          title: 'Skilled',
          progress: '',
          description: 'Attempted 11 lessons'
        },
        {
          title: 'Legendary',
          progress: '',
          description: 'Attempted 13 lessons'
        },
        {
          title: 'Conqueror',
          progress: '',
          description: 'Attempted 15 lessons'
        },
    ]
}
