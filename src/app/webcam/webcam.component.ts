import { HttpClient } from '@angular/common/http';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WebcamService } from './webcam.service';

@Component({
  selector: 'app-webcam',
  templateUrl: './webcam.component.html',
  styleUrls: ['./webcam.component.css']
})
export class WebcamComponent implements AfterViewInit, OnInit {
  @ViewChild('videoElement') videoElement!: ElementRef;

  private mediaRecorder!: MediaRecorder;
  private recordedChunks: BlobPart[] = [];
  private countdown: number = 3;
  public prediction: string = "0.00";
  public accuracyMessage: string = "";

  public userId: string | null = sessionStorage.getItem('userId');
  public userName: string | null = sessionStorage.getItem('username');
  public profile: string | null = sessionStorage.getItem('userImage');

  public lessonName: string = "";
  public lessonId: number = 0;
  public videoPath: string = ""

  constructor(
    private router: Router, 
    private http: HttpClient,
    private cdr: ChangeDetectorRef,
    private webcamService: WebcamService,
    private route: ActivatedRoute, 
  ) {}

  ngOnInit(): void {
    this.lessonName = this.route.snapshot.params['name'];
    this.lessonId = this.route.snapshot.params['id'];
    this.videoPath = `assets/lessons/${this.lessonName}.mp4`;
  }

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
    // this.updateAccuracyMessage(`Recording in ${this.countdown}...`);
    const countdownInterval = setInterval(() => {
      this.countdown--;
      // this.updateAccuracyMessage(`Recording in ${this.countdown}...`);
      if (this.countdown === 0) {
        clearInterval(countdownInterval);
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
            
            console.log(base64String.split(',')[1]);
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
    const url = `http://127.0.0.1:5000/capture_video?words=${this.lessonName}`;
    this.http.post(url, { video: base64Data }).subscribe(
      (response: any) => {
        console.log('Server response:', response.Prediction);
        this.prediction = response['Prediction']; 
        console.log(this.prediction)
        console.log(parseFloat(this.prediction))
        this.updateAccuracyMessage()
        this.webcamService.attemptLesson(this.userId, this.lessonId, {score: parseFloat(this.prediction)})
        this.router.navigate(['/webcam']);
      },
      (error) => {
        console.error('Error sending video data to server:', error);
      }
    );
  }  
  
  updateAccuracyMessage(): void {
    if (parseFloat(this.prediction) < 25) {
      this.accuracyMessage = 'Better luck next time';
    } else if (parseFloat(this.prediction) < 50) {
      this.accuracyMessage = 'You\'re almost there';
    } else if (parseFloat(this.prediction) < 75) {
      this.accuracyMessage = 'Wow, you did great';
    } else if (parseFloat(this.prediction) < 90) {
      this.accuracyMessage = 'Well done!';
    } else {
      this.accuracyMessage = 'Excellent!';
    }
    this.cdr.detectChanges(); // Trigger change detection
  }
  

  navigateToView(): void {
    this.router.navigate(['/view']);
  }
}
