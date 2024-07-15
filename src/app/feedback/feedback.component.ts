import { Component } from '@angular/core';
import { SideSetComponent } from "../side-set/side-set.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-feedback',
    standalone: true,
    templateUrl: './feedback.component.html',
    styleUrls: ['./feedback.component.css'],
    imports: [SideSetComponent]
})
export class FeedbackComponent {
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
