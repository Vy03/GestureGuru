import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from '../config.service';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  private baseUrl: string;

  constructor(
    private http: HttpClient,
    private config: ConfigService 
  ) {
    this.baseUrl = this.config.baseUrl;
  }

  registerUser(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}user/register`, data);
  }

  requestOtp(id: number): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}user/request-otp/${id}`, null);
  }

  verifyUser(id: number, otp: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}user/verify/${id}`, otp);
  }  
}
