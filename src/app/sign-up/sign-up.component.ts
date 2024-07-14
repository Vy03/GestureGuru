import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {

  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  navigateToSetup() {
    this.router.navigate(['/setup']);
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToLand() {
    this.router.navigate(['']);
  }
}
