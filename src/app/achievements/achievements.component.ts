import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-achievements',
    standalone: true,
    templateUrl: './achievements.component.html',
    styleUrl: './achievements.component.css',
    imports: [SidebarComponent, CommonModule]
})
export class AchievementsComponent {
    achievements = Array(12).fill({
        title: 'Perfection',
        progress: '1/10',
        description: 'Achieve 100% accuracy 10 times'
      });

      constructor(
        private router: Router,
      ) {}
    
    
      ngOnInit(): void {
          this.checkSession()
      }
    
      checkSession() {
          const isLoggedIn = sessionStorage.getItem('isLoggedIn');
          if (!isLoggedIn || isLoggedIn !== 'yes') {
              this.router.navigate(['/login']);
          }
      }
}
