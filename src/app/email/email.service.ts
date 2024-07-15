import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from '../config.service';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  constructor(
    private http: HttpClient,
    private config: ConfigService 
  ) {}

  updateEmail(id: any, data: any): Observable<any> {
    return this.http.put(`${this.config.baseUrl}user/email/${id}`, data).pipe(
      catchError(this.handleError)
    );
  }

  requestOTP(id: any): Observable<any> {
    return this.http.put(`${this.config.baseUrl}user/request-otp/${id}`, null).pipe(
      catchError(this.handleError)
    );
  }

  verifyOTP(id: any, data: any): Observable<any> {
    return this.http.put(`${this.config.baseUrl}user/verify/${id}?new=false`, data).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error: ${error.error.message || error.message}`;
    }
    return throwError(errorMessage);
  }
}
