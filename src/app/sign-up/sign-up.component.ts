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

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private signUpService: SignUpService
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
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      this.signUpService.registerUser(this.signUpForm.value).subscribe(
        (response: any) => {
          //benarkah ini aku tak tau
          console.log('Data berhasil dikirim:', response);
          this.toastr.success(response.message, 'OTP Sent');
        },
        (error) => {
          console.error('Gagal mengirim data:', error);
          this.toastr.error(error.message, 'Error');
        }
      );
    }
  }
}
