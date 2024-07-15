import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from '../config.service';

@Injectable({
  providedIn: 'root'
})
export class WebcamService {
  private baseUrl: string;

  constructor(
    private http: HttpClient,
    private config: ConfigService 
  ) {
    this.baseUrl = this.config.baseUrl;
  }

  attemptLesson(userId: any, lessonId: any, score: any){
    return this.http.put<any>(`${this.baseUrl}lesson/attempt/${userId}/${lessonId}`, score);
  }
}
