import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
    selector: 'app-lessons',
    standalone: true,
    templateUrl: './lessons.component.html',
    styleUrl: './lessons.component.css',
    imports: [SidebarComponent]
})
export class LessonsComponent {
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
