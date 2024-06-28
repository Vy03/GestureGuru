import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { ContentLandpageComponent } from '../content-landpage/content-landpage.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  standalone: true,
  imports: [HeaderComponent, ContentLandpageComponent, FooterComponent],
})
export class LandingComponent {
  constructor(private router: Router) {}

  goToLogin() {
    this.router.navigate(['/login']);
  }
}

