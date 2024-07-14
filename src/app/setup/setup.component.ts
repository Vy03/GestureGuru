import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './setup.component.html',
  styleUrl: './setup.component.css'
})
export class SetupComponent {

  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  profilePicture: File | null = null;
  profilePictureUrl: string = 'assets/default_profile.jpeg';
  bio: string = '';
  learningLevel: string | null = null;

  onFileSelected(event: any) {
    this.profilePicture = event.target.files[0];

    // Create a URL for the selected file
    if (this.profilePicture) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.profilePictureUrl = e.target.result; // Set the preview URL
      };
      reader.readAsDataURL(this.profilePicture);
    }
  }

  selectLearningLevel(level: string) {
    this.learningLevel = level;
  }


  onSubmit() {
    if (this.profilePicture && this.bio) {
      console.log('Profile Picture:', this.profilePicture);
      console.log('Bio:', this.bio);
      console.log('Learning Level:', this.learningLevel);
      // Further handling can be done here, e.g., form validation messages
    } else {
      console.log('Please fill in all required fields.');
    }
  }

  triggerFileInput() {
    const fileInput = document.getElementById('profilePicture') as HTMLInputElement;
    fileInput.click();
  }
}
