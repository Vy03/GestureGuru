import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  baseUrl = 'https://5fed-158-140-174-21.ngrok-free.app/gesture-guru/';

  constructor() {}
}

/* Example Usage

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service'; 

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(
    private http: HttpClient,
    private config: ConfigService 
  ) {}

  fetchData() {
    return this.http.get(`${this.config.baseUrl}/data`);
  }
}

*/