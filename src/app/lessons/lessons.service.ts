import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from '../config.service';

@Injectable({
  providedIn: 'root'
})
export class LessonService {
  constructor(
    private http: HttpClient,
    private config: ConfigService 
  ) {}

  browseLessons(userId: any) {
    return this.http.post<any>(`${this.config.baseUrl}lessons`, userId);
  }

  detailLessons(userId: any, lessonId: any) {
    const formData = {
      userId: userId,
      lessonId: lessonId
    }
    return this.http.post<any>(`${this.config.baseUrl}lessons`, formData);
  }

  saveLessons(userId: any, lessonId: any) {
    return this.http.put<any>(`${this.config.baseUrl}lesson/save/${parseInt(userId)}/${parseInt(lessonId)}`, null);
  }
}
