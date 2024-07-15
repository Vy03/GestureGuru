import { SidebarComponent } from "../sidebar/sidebar.component";
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'app-saved',
    standalone: true,
    templateUrl: './saved.component.html',
    styleUrl: './saved.component.css',
    imports: [SidebarComponent]
})
export class SavedComponent {
    constructor(
        private router: Router,
      ) {}


      ngOnInit(): void {
        this.checkSession()
  
    }
  
    checkSession() {
        const isLoggedIn = sessionStorage.getItem('isLoggedIn');
        if (!isLoggedIn || isLoggedIn !== 'yes') {
            this.router.navigate(['/login']);
        }
    }
    
    bookmarkedLessons: string[] = [];

    toggleBookmark(lessonCode: string) {
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
