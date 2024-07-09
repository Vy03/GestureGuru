import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
declare var bootstrap: any;

@Component({
  selector: 'app-side-set',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-set.component.html',
  styleUrl: './side-set.component.css'
})
export class SideSetComponent {

  @ViewChild('logoutModal') logoutModal!: ElementRef;

  constructor(private router: Router) { }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  navigateToSet() {
    this.router.navigate(['/settings']);
  }

  navigateToNotif() {
    this.router.navigate(['/notif-set']);
  }

  navigateToFeedback() {
    this.router.navigate(['/feedback']);
  }

  // openLogoutModal() {
  //   const modalElement = document.getElementById('logoutModal');
  //   const modal = new bootstrap.Modal(modalElement);
  //   modal.show();
  // }
  
  logout() {
    // Implement logout logic here
    this.router.navigate(['']); // Redirect to login page after logout
  }

}
