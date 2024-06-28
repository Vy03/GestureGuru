import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from "./footer/footer.component";
import { ContentLandpageComponent } from "./content-landpage/content-landpage.component";

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
