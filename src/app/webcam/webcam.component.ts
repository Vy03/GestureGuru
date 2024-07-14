import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-webcam',
  templateUrl: './webcam.component.html',
  styleUrls: ['./webcam.component.css']
})
export class WebcamComponent implements AfterViewInit {
  @ViewChild('videoElement') videoElement!: ElementRef;
  accuracyMessage: string = 'Accuracy: 0%';

  private mediaRecorder!: MediaRecorder;
  private recordedChunks: BlobPart[] = [];
  private countdown: number = 3;

  constructor(private router: Router, private http: HttpClient) {}

  ngAfterViewInit(): void {
    this.setupWebcam();
    this.startRecording();
  }

  setupWebcam(): void {
    const video: HTMLVideoElement = this.videoElement.nativeElement;

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          video.srcObject = stream;
        })
        .catch((error) => {
          console.error('Unable to access the webcam:', error);
        });
    } else {
      console.error('Browser does not support getUserMedia.');
    }
  }

  startRecording(): void {
    this.countdown = 3;
    this.updateAccuracyMessage(`Recording in ${this.countdown}...`);
    const countdownInterval = setInterval(() => {
      this.countdown--;
      this.updateAccuracyMessage(`Recording in ${this.countdown}...`);
      if (this.countdown === 0) {
        clearInterval(countdownInterval);
        this.updateAccuracyMessage('Recording...');
        const video: HTMLVideoElement = this.videoElement.nativeElement;
        const stream = video.srcObject as MediaStream;

        this.mediaRecorder = new MediaRecorder(stream);
        this.recordedChunks = [];

        this.mediaRecorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            this.recordedChunks.push(event.data);
            console.log('Data available:', event.data);
          }
        };

        this.mediaRecorder.onstop = () => {
          console.log('Recording stopped');
          const blob = new Blob(this.recordedChunks, { type: 'video/webm' });
          const reader = new FileReader();
          reader.onloadend = () => {
            const base64String = reader.result as string;
            
            console.log(base64String.split(',')[1]); // Log Base64 string
            this.sendToServer(base64String.split(',')[1])
          };
          reader.readAsDataURL(blob);
          this.recordedChunks = [];
        };

        console.log('Starting recording');
        this.mediaRecorder.start();
        setTimeout(() => {
          console.log('Stopping recording');
          
          this.mediaRecorder.stop();
        }, 5000);
          }
    }, 1000);
  }

  sendToServer(base64Data: string): void {
    const url = `http://127.0.0.1:5000/capture_video?words=A`;
    this.http.post(url, { video: base64Data }).subscribe(
      (response: any) => {
        this.updateAccuracyMessage(`Accuracy: ${response.accuracy}%`);
        // Navigate after HTTP request completes successfully
        this.router.navigate(['/webcam']);
      },
      (error) => {
        console.error('Error sending video data to server:', error);
      }
    );
  }
  

  updateAccuracyMessage(message: string): void {
    this.accuracyMessage = message;
  }

  navigateToView(): void {
    this.router.navigate(['/view']);
  }
}
