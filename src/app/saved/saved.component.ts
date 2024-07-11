import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
    selector: 'app-saved',
    standalone: true,
    templateUrl: './saved.component.html',
    styleUrl: './saved.component.css',
    imports: [SidebarComponent]
})
export class SavedComponent {
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
