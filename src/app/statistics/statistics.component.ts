import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { Chart } from 'chart.js';

@Component({
    selector: 'app-statistics',
    standalone: true,
    templateUrl: './statistics.component.html',
    styleUrl: './statistics.component.css',
    imports: [SidebarComponent]
})
export class StatisticsComponent /*implements OnInit*/ {

    // constructor() { }
  
    // ngOnInit(): void {
    //   this.initDailyActivityChart();
    //   this.initStatisticsChart();
    // }
  
    // initDailyActivityChart() {
    //   const ctx = document.getElementById('dailyActivityChart') as HTMLCanvasElement;
    //   new Chart(ctx, {
    //     type: 'bar',
    //     data: {
    //       labels: Array.from({ length: 30 }, (_, i) => i + 1),
    //       datasets: [{
    //         label: 'Daily Activity',
    //         data: [30, 20, 50, 60, 90, 40, 80, 70, 100, 50, 30, 20, 50, 60, 90, 40, 80, 70, 100, 50, 30, 20, 50, 60, 90, 40, 80, 70, 100, 50],
    //         backgroundColor: 'rgba(75, 192, 192, 0.2)',
    //         borderColor: 'rgba(75, 192, 192, 1)',
    //         borderWidth: 1
    //       }]
    //     },
    //     options: {
    //       scales: {
    //         y: {
    //           beginAtZero: true
    //         }
    //       }
    //     }
    //   });
    // }
  
    // initStatisticsChart() {
    //   const ctx = document.getElementById('statisticsChart') as HTMLCanvasElement;
    //   new Chart(ctx, {
    //     type: 'line',
    //     data: {
    //       labels: Array.from({ length: 30 }, (_, i) => i + 1),
    //       datasets: [{
    //         label: 'Statistics',
    //         data: [/* Your data here */],
    //         fill: false,
    //         borderColor: 'rgb(75, 192, 192)',
    //         tension: 0.1
    //       }]
    //     },
    //     options: {
    //       scales: {
    //         y: {
    //           beginAtZero: true
    //         }
    //       }
    //     }
    //   });
    // }
  }
