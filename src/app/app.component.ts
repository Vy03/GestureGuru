import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ContentLandpageComponent } from "./content-landpage/content-landpage.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from './header/header.component';

@Component({
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [RouterModule, HeaderComponent, FooterComponent, ContentLandpageComponent]
})
export class AppComponent {
  title = 'testproyek';
  constructor(public router: Router) {}
}
