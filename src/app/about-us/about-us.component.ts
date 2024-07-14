import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'], // Optional: add if you have styles
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
})
export class AboutUsComponent {
  constructor(private router: Router) {}

  navigateToSignup() {
    this.router.navigate(['/sign-up']);
  }

}
