import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-webcam',
  standalone: true,
  imports: [],
  templateUrl: './webcam.component.html',
  styleUrl: './webcam.component.css'
})
export class WebcamComponent {
  @ViewChild('videoElement')
  videoElement!: ElementRef;

  ngAfterViewInit(): void {
    this.setupWebcam();
  }

  setupWebcam(): void {
    const video: HTMLVideoElement = this.videoElement.nativeElement;

    // Mengakses webcam pengguna
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          video.srcObject = stream;
        })
        .catch((error) => {
          console.error('Tidak bisa mengakses webcam:', error);
        });
    } else {
      console.error('Browser tidak mendukung getUserMedia.');
    }
  }

}
