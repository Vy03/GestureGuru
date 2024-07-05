import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  navigateToLessons(){
    this.router.navigate(['/lessons']);
  }

  navigateToStats(){
    this.router.navigate(['/statistics']);
  }

  navigateToNotif(){
    this.router.navigate(['/notifications']);
  }

  navigateToSaved() {
    this.router.navigate(['/saved']);
  }

  navigateToAchv() {
    this.router.navigate(['/achievements']);
  }

  navigateToSettings() {
    this.router.navigate(['/settings']);
  }

}
