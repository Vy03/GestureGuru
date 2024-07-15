import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-notification',
    standalone: true,
    templateUrl: './notification.component.html',
    styleUrl: './notification.component.css',
    imports: [SidebarComponent]
})
export class NotificationComponent {
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
