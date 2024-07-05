import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-set',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-set.component.html',
  styleUrl: './side-set.component.css'
})
export class SideSetComponent {
  constructor(private router: Router) {}

  navigateToSet(){
    this.router.navigate(['/settings']);
  }

  navigateToNotif(){
    this.router.navigate(['/notif-set']);
  }

  navigateToFeedback() {
    this.router.navigate(['/feedback']);
  }
}
