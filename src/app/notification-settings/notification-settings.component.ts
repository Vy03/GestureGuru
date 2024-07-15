import { Component, OnInit } from '@angular/core';
import { SideSetComponent } from "../side-set/side-set.component";
import { Router } from '@angular/router';


@Component({
    selector: 'app-notification-settings',
    standalone: true,
    templateUrl: './notification-settings.component.html',
    styleUrl: './notification-settings.component.css',
    imports: [SideSetComponent]
})
export class NotificationSettingsComponent {
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
