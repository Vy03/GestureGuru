import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SignUpService } from './sign-up.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;
  otpForm!: FormGroup;

  public userId: number = 8;
  public isRegistered: boolean = true;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private signUpService: SignUpService,
  ) {}

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  navigateToSetup() {
    this.router.navigate(['/setup']);
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToLand() {
    this.router.navigate(['']);
  }
  
  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', Validators.required]
    });

    this.otpForm = this.fb.group({
      otp: ['', Validators.required]
    });
  }

  onOtpSend() {
    this.signUpService.requestOtp(this.userId).subscribe(
      (response: any) => {
        this.toastr.success(response.message, 'OTP Sent');
      },
      (error) => {
        if (error.error && error.error.message) {
          this.toastr.error(error.error.message, 'Error');
        } else {
          this.toastr.error("Terjadi kesalahan saat mengirim data", 'Error');
        }
      }
    );
  }

  back(){
    this.isRegistered = false;
  }

  onOtpSubmit() {
    if (this.otpForm.valid){
      const otpData = { otp: this.otpForm.get('otp')?.value };
      
      this.signUpService.verifyUser(this.userId, otpData).subscribe(
        (response: any) => {
          console.log('Data successfully sent:', response);
          this.toastr.success(response.message, 'Verification Success');
          this.isRegistered = true;
          sessionStorage.setItem('id', response.user.id);
          sessionStorage.setItem('username', response.user.username);
          this.router.navigate(['/home']);
        },
        (error) => {
          if (error.error && error.error.message) {
            this.toastr.error("User Not Registered", 'Error');
          } else {
            console.error('Failed to send data:', error);
            this.toastr.error("An error occurred while sending data", 'Error');
          }
        }
      )
    }
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      this.signUpService.registerUser(this.signUpForm.value).subscribe(
        (response: any) => {
          console.log('Data successfully sent:', response);
          this.toastr.success(response.message, 'Registration Success');
          this.isRegistered = true;
          if (response.user_id) {
            this.userId = parseInt(response.user_id);
          }
        },
        (error) => {
          if (error.error && error.error.message) {
            this.toastr.error("User Not Registered", 'Error');
          } else {
            console.error('Failed to send data:', error);
            this.toastr.error("An error occurred while sending data", 'Error');
          }
        }
      );
    }    
  }
}
