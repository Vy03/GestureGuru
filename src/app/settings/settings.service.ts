import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from '../config.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  constructor(
    private http: HttpClient,
    private config: ConfigService 
  ) {}

  updateUser(id: number, data: any) {
    return this.http.put(`${this.config.baseUrl}user/${id}`, data).pipe(
      catchError(this.handleError)
    );
  }

  getUser(id: number) {
    return this.http.post<any>(`${this.config.baseUrl}user`, {"userId": id});
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Kesalahan sisi klien
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Kesalahan sisi server
      errorMessage = `Error: ${error.error.message || error.message}`;
    }
    return throwError(errorMessage);
  }
}
