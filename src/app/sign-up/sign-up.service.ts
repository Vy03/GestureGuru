import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    return this.http.post(`http://localhost:8080/gesture-guru/user/register`, data);
  }
}