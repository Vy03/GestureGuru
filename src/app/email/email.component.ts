import { Component } from '@angular/core';
import { SideSetComponent } from "../side-set/side-set.component";

@Component({
  selector: 'app-email',
  standalone: true,
  imports: [SideSetComponent],
  templateUrl: './email.component.html',
  styleUrl: './email.component.css'
})
export class EmailComponent {

}
