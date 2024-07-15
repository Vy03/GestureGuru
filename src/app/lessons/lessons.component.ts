import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarComponent } from './../sidebar/sidebar.component';
import { LessonService } from './lessons.service';

@Component({
  selector: 'app-lessons',
  standalone: true,
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css'],
  imports: [SidebarComponent]
})
export class LessonsComponent implements OnInit {
  bookmarkedLessons: string[] = [];
  userId: string | null = sessionStorage.getItem('userId');
  userName: string | null = sessionStorage.getItem('username');
  profile: string | null = sessionStorage.getItem('userImage');

  lessonList = [];
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
      this.lessonService.browseLessons({"userId":8}).subscribe(
        (response) => {
          console.log('Response:', response);
        },
        (error: any) => {
          console.error('Error:', error);
        }
      );
    }
  }

  toggleBookmark(lessonCode: string): void {
    const index = this.bookmarkedLessons.indexOf(lessonCode);
    if (index === -1) {
      this.bookmarkedLessons.push(lessonCode);
    } else {
      this.bookmarkedLessons.splice(index, 1);
    }
  }

  isBookmarked(lessonCode: string): boolean {
    return this.bookmarkedLessons.includes(lessonCode);
  }
}
