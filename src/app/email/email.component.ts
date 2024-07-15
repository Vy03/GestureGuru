import { Component } from '@angular/core';
import { SideSetComponent } from "../side-set/side-set.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-email',
  standalone: true,
  imports: [SideSetComponent],
  templateUrl: './email.component.html',
  styleUrl: './email.component.css'
})
export class EmailComponent {
  constructor(
    private router: Router,
  ) {}


  ngOnInit(): void {
      this.checkSession()
  }

  checkSession() {
      const isLoggedIn = sessionStorage.getItem('isLoggedIn');
      if (!isLoggedIn || isLoggedIn !== 'yes') {
          this.router.navigate(['/login']);
      }
  }
}
