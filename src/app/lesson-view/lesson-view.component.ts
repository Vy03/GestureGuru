import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lessonViewService } from './lesson-view.service';

@Component({
  selector: 'app-lesson-view',
  standalone: true,
  imports: [],
  templateUrl: './lesson-view.component.html',
  styleUrl: './lesson-view.component.css'
})
export class LessonViewComponent implements OnInit{
  userId: string | null = sessionStorage.getItem('userId');
  userName = sessionStorage.getItem('username');
  profile: string | null = sessionStorage.getItem('userImage');

  constructor(
    private router: Router,
    private lessonService: lessonViewService,
  ) {}
  
  navigateToWebcam(){
    this.router.navigate(['/webcam']);
  }

  ngOnInit(): void {
    if (this.userId) {
      this.lessonService.browseLessons(this.userId).subscribe(
        (lessons: any) => {
          console.log('Lessons retrieved:', lessons);
          // Process lessons data as needed
        },
        (error) => {
          console.error('Error retrieving lessons:', error);
          // Handle error
        }
      );
    }
  }

  navigateToLand(){
    this.router.navigate(['']);
  } 
}
