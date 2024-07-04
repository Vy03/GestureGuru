import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { LandingComponent } from './app/landing/landing.component';
import { LoginComponent } from './app/login/login.component';
import { AboutUsComponent } from './app/about-us/about-us.component'; 
import { SignUpComponent } from './app/sign-up/sign-up.component';
import { HomeComponent } from './app/home/home.component';
import { SettingsComponent } from './app/settings/settings.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about-us', component: AboutUsComponent }, 
  { path: 'sign-up', component: SignUpComponent },
  { path: 'home', component: HomeComponent},
  { path: 'settings', component: SettingsComponent },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
  ],
});