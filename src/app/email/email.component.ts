import { Component, OnInit } from '@angular/core';
import { SideSetComponent } from "../side-set/side-set.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmailService } from './email.service';


@Component({
  selector: 'app-email',
  standalone: true,
  imports: [
    SideSetComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './email.component.html',
  styleUrl: './email.component.css'
})
export class EmailComponent implements OnInit {
  emailForm!: FormGroup;
  otpForm!: FormGroup;

  userId: string | null = sessionStorage.getItem('userId');
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private emailService: EmailService,
) {}

  ngOnInit(): void {
    this.checkSession()
    this.emailForm = this.fb.group({
      email: ['', Validators.required],
    });

    this.otpForm = this.fb.group({
      otp: ['', Validators.required],
    });
  }

  checkSession() {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (!isLoggedIn || isLoggedIn !== 'yes') {
        this.router.navigate(['/login']);
    }
  }

  onSubmitEmail() {
    console.log('anjing')
    if (this.emailForm.valid) {
      this.emailService.updateEmail(this.userId, this.emailForm.value).subscribe(
        (response: any) => {
          console.log('Email berhasil dikirim:', response);
          this.toastr.success(response.message, 'Success');
        },
        (error) => {
          console.error('Gagal ganti email:', error);
          this.toastr.error(error, 'Error');
        }
      );
    }
  }

  requestOTP() {
    this.emailService.requestOTP(this.userId).subscribe(
      (response: any) => {
        console.log('OTP Sent:', response);
        this.toastr.success(response.message, 'Success');
      },
      (error) => {
        console.error('Fail:', error);
        this.toastr.error(error, 'Error');
      }
    );
  }

  onSubmitOTP() {
    if (this.otpForm.valid) {
      this.emailService.verifyOTP(this.userId, this.otpForm.value).subscribe(
        (response: any) => {
          console.log('Verify OTP:', response);
          this.toastr.success(response.message, 'Success');
        },
        (error) => {
          console.error('Failed verifying:', error);
          this.toastr.error(error, 'Error');
        }
      );
    }
  }
}
