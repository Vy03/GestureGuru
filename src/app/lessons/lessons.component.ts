import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarComponent } from './../sidebar/sidebar.component';
import { LessonService } from './lessons.service';

@Component({
  selector: 'app-lessons',
  standalone: true,
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css'],
  imports: [SidebarComponent, NgFor]
})
export class LessonsComponent implements OnInit {
  bookmarkedLessons: string[] = [];
  userId: string | null = sessionStorage.getItem('userId');
  userName: string | null = sessionStorage.getItem('username');
  profile: string | null = sessionStorage.getItem('userImage');

  lessonList: any[] = [];
  constructor(
    private router: Router,
    private lessonService: LessonService // Corrected service name
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    console.log(this.userId);
    if (this.userId) {
      this.lessonService.browseLessons({"userId":parseInt(this.userId)}).subscribe(
        (response) => {
          console.log('Response:', response);
          this.lessonList = response.lessons;
          console.log(this.lessonList)
        },
        (error: any) => {
          console.error('Error:', error);
        }
      );
    }
  }

  toggleBookmark(id: any, saved: boolean): void {
    this.lessonService.saveLessons(this.userId, id)
    .subscribe(response => {
      if (saved) {
        this.lessonList.find(lesson => lesson.id === id).saved = false;
      } else {
        this.lessonList.find(lesson => lesson.id === id).saved = true;
      }
    }, error => {
      console.error('Failed to save lesson:', error);
    });
  }

  detail(lessonTitle: string) {
    console.log(`Clicked on lesson with Name: ${lessonTitle}`);

    this.router.navigate(['/view', lessonTitle]);
  }
}
