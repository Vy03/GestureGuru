import { Component } from '@angular/core';
import { SideSetComponent } from "../side-set/side-set.component";

@Component({
    selector: 'app-feedback',
    standalone: true,
    templateUrl: './feedback.component.html',
    styleUrls: ['./feedback.component.css'],
    imports: [SideSetComponent]
})
export class FeedbackComponent {

}
