import { Component, OnInit } from '@angular/core';
import { SideSetComponent } from "../side-set/side-set.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SettingsService } from './settings.service';
import { NgIf } from '@angular/common';


@Component({
    selector: 'app-settings',
    standalone: true,
    templateUrl: './settings.component.html',
    styleUrl: './settings.component.css',
    imports: [
        SideSetComponent,
        ReactiveFormsModule,
    ]
})
export class SettingsComponent {
    settingsForm!: FormGroup;
    user: any
    constructor(
        private router: Router,
        private fb: FormBuilder,
        private toastr: ToastrService,
        private settingsService: SettingsService,
    ) {}
      
    userId: string | null = sessionStorage.getItem('userId');


    ngOnInit(): void {
        this.checkSession()
        this.settingsForm = this.fb.group({
            username: [''],
            bio: [''],
        });
    }

    checkSession() {
        const isLoggedIn = sessionStorage.getItem('isLoggedIn');
        if (!isLoggedIn || isLoggedIn !== 'yes') {
            this.router.navigate(['/login']);
        }
    }

    getUser() {
        this.settingsService.getUser(this.userId).subscribe(
            (response: any) => {
                if (response.status === 'success') {
                    this.user = response.data
                    console.log(this.user)
                } else {
                    this.toastr.error(response.message, 'Error');
                }
            },
            (error) => {
                console.error('Failed to get user details:', error);
                this.toastr.error(error, 'Error');
            }
        );
    }

    onSubmit() {
        console.log('ayam')
        this.settingsService.updateUser(this.userId, this.settingsForm.value).subscribe(
        (response: any) => {
            console.log('Data successfully sent:', response);
            this.toastr.success(response.message, 'Profile Updated');
        },
        (error) => {
            console.error('Update failed:', error);
            this.toastr.error(error, 'Error');
          }
        );
    }    
      
}
