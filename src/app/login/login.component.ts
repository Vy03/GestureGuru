import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionStorageService } from 'ngx-webstorage';
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
    private loginService: LoginService,
    private sessionStorage: SessionStorageService
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
          console.log('Data berhasil dikirim:', response);
          this.toastr.success(response.message, 'Success');
          sessionStorage.setItem('username', response.user.username);
          sessionStorage.setItem('userId', response.user.id);
          this.router.navigate(['/home']);
        },
        (error) => {
          console.error('Gagal login:', error);
          this.toastr.error(error, 'Error');
        }
      );
    }
  }
}