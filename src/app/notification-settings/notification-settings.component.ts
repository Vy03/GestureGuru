import { Component, OnInit } from '@angular/core';
import { SideSetComponent } from "../side-set/side-set.component";


@Component({
    selector: 'app-notification-settings',
    standalone: true,
    templateUrl: './notification-settings.component.html',
    styleUrl: './notification-settings.component.css',
    imports: [SideSetComponent]
})
export class NotificationSettingsComponent {
  constructor() { }

  ngOnInit(): void {
  }

}
