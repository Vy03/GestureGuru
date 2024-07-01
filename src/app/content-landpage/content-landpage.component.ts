import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content-landpage',
  standalone: true,
  templateUrl: './content-landpage.component.html',
  styleUrls: ['./content-landpage.component.css']
})
export class ContentLandpageComponent {
  constructor(private router: Router) {}

  navigateToSignup() {
    this.router.navigate(['/sign-up']);
  }
}
