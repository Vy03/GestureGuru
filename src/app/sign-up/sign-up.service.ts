import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from '../config.service';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  constructor(
    private http: HttpClient,
    private config: ConfigService 
  ) {}

  registerUser(data: any) {
    return this.http.post(`${this.config.baseUrl}user/register`, data);
  }
}