import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lessonViewService } from './lesson-view.service';

@Component({
  selector: 'app-lesson-view',
  standalone: true,
  templateUrl: './lesson-view.component.html',
  styleUrls: ['./lesson-view.component.css'],
  imports: [NgFor, NgIf, NgClass],
})
export class LessonViewComponent implements OnInit {
  userId: string | null = sessionStorage.getItem('userId');
  userName = sessionStorage.getItem('username');
  profile: string | null = sessionStorage.getItem('userImage');
  lessonName: string = "";
  lessonId: number = 0;

  lessonList: any[] = []
  filteredLessons: any[] = []
  videoPath: string = ""

  constructor(
    private router: Router,
    private route: ActivatedRoute, 
    private lessonService: lessonViewService 
  ) {}

  ngOnInit(): void {
    this.lessonName = this.route.snapshot.params['name'];
    this.videoPath = `assets/lessons/${this.lessonName}.mp4`
    this.loadData();
  }

  loadData(): void {
    console.log(this.userId);
    this.checkSession();
    if (this.userId) {
      this.lessonService.browseLessons({"userId": parseInt(this.userId)}).subscribe(
        (response) => {
          console.log('Response:', response);
          this.lessonList = response.lessons;
          
          const foundLesson = this.lessonList.find(lesson => lesson.title === this.lessonName);
          if (foundLesson) {
            console.log('Found lesson:', foundLesson);
            this.lessonId = foundLesson.id;
            this.filteredLessons = this.lessonList.filter(lesson => lesson.type === foundLesson.type);
            console.log('Filtered lessons by type:', this.filteredLessons);
          } else {
            console.log('Lesson not found with name:', this.lessonName);
          }
        },
        (error: any) => {
          console.error('Error:', error);
        }
      );
    }
  }

  navigateToWebcam() {
    this.router.navigate(['/webcam', this.lessonName, this.lessonId]);
  }

  navigateToLessons() {
    this.router.navigate(['/lessons']);
  }
  checkSession() {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (!isLoggedIn || isLoggedIn !== 'yes') {
        this.router.navigate(['/login']);
    }
  }

  navigateToLand(){
    this.router.navigate(['']);
  } 
}
