import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto'; // Import Chart.js (use 'chart.js/auto' for Chart.js version 3)
import { SidebarComponent } from "../sidebar/sidebar.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-statistics',
    standalone: true,
    templateUrl: './statistics.component.html',
    styleUrl: './statistics.component.css',
    imports: [SidebarComponent]
})
export class StatisticsComponent implements OnInit {

  constructor(
    private router: Router,
  ) {}

    ngOnInit(): void {
      this.checkSession()
        this.initDailyActivityChart();
        this.initStatisticsChart();
      }

      checkSession() {
        const isLoggedIn = sessionStorage.getItem('isLoggedIn');
        if (!isLoggedIn || isLoggedIn !== 'yes') {
            this.router.navigate(['/login']);
        }
    }
      
      initDailyActivityChart() {
        const ctx = document.getElementById('dailyActivityChart') as HTMLCanvasElement;
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: Array.from({ length: 30 }, (_, i) => i + 1),
            datasets: [{
              label: 'Daily Activity',
              data: [30, 20, 50, 60, 90, 40, 80, 70, 100, 50, 30, 20, 50, 60, 90, 40, 80, 70, 100, 50, 30, 20, 50, 60, 90, 40, 80, 70, 100, 50],
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      }
      
      initStatisticsChart() {
        const ctx = document.getElementById('statisticsChart') as HTMLCanvasElement;
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: Array.from({ length: 30 }, (_, i) => i + 1),
            datasets: [{
              label: 'Statistics',
              data: [/* Your data here */],
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      }      
  }
