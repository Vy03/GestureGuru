import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  standalone: true,
  imports: [SidebarComponent],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userId = sessionStorage.getItem('id');
  userName = sessionStorage.getItem('username');
  profile: string | null = sessionStorage.getItem('imagepath');

  lessons = [
    { title: 'Row 1', difficulty: 123, status: 'green' },
    { title: 'Row 2', difficulty: 456, status: 'yellow' },
    { title: 'Row 3', difficulty: 789, status: 'red' },
    // Add more lessons as needed
  ];

  achievements = [
    { title: 'Perfection', icon: 'fa-trophy' },
    { title: 'Excellence', icon: 'fa-trophy' },
    { title: 'Mastery', icon: 'fa-trophy' },
    // Add more achievements as needed
  ];

  missions = [
    { text: 'Log in today', status: 'green' },
    { text: 'Learn one lesson', status: 'green' },
    { text: 'Learn two lessons', status: 'yellow' },
    { text: 'Achieve 100% accuracy at least one time', status: 'red' },
    // Add more missions as needed
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  getUserProfilePictureUrl(): string {
    const path = this.profile ? this.profile : 'assets/default_profile.jpeg'
    return path;
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
