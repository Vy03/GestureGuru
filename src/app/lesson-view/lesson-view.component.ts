import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lesson-view',
  standalone: true,
  imports: [],
  templateUrl: './lesson-view.component.html',
  styleUrl: './lesson-view.component.css'
})
export class LessonViewComponent {
  constructor(private router: Router) {}
  
  navigateToWebcam(){
    this.router.navigate(['/webcam']);
  }

  navigateToLand(){
    this.router.navigate(['']);
  }
}
