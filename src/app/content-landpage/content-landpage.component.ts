import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-content-landpage',
  standalone: true,
  imports: [],
  templateUrl: './content-landpage.component.html',
  styleUrls: ['./content-landpage.component.css']
})
export class ContentLandpageComponent {
  constructor(private router: Router) {}

  navigateToSignup() {
    this.router.navigate(['/sign-up']);
  }

  navigateToHome(){
    this.router.navigate(['/home']);
  }

  navigateToSet(){
    this.router.navigate(['/settings']);
  }

  navigateToView(){
    this.router.navigate(['/view']);
  }

  navigateToWebcam(){
    this.router.navigate(['/webcam']);
  }

  navigateToVerify(){
    this.router.navigate(['/verify']);
  }
}
