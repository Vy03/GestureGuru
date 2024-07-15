import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  loginForm!:FormGroup

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private loginService: LoginService
  ) {}

  navigateToHome() {
    this.router.navigate(['/home']);
  }
  
  navigateToSignup() {
    this.router.navigate(['/sign-up']);
  }

  navigateToLand() {
    this.router.navigate(['']);
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.loginService.loginUser(this.loginForm.value).subscribe(
        (response: any) => {
          //benarkah ini aku tak tau
          console.log('Data berhasil dikirim:', response);
          this.toastr.success(response.message, 'Success');
        },
        (error) => {
          console.error('Gagal login:', error);
          this.toastr.error(error, 'Error');
        }
      );
    }
  }
}