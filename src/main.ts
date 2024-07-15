import { bootstrapApplication } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import { AboutUsComponent } from './app/about-us/about-us.component';
import { AchievementsComponent } from './app/achievements/achievements.component';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { EmailComponent } from './app/email/email.component';
import { FeedbackComponent } from './app/feedback/feedback.component';
import { HomeComponent } from './app/home/home.component';
import { LandingComponent } from './app/landing/landing.component';
import { LessonViewComponent } from './app/lesson-view/lesson-view.component';
import { LessonsComponent } from './app/lessons/lessons.component';
import { LoginComponent } from './app/login/login.component';
import { NotificationSettingsComponent } from './app/notification-settings/notification-settings.component';
import { NotificationComponent } from './app/notification/notification.component';
import { SavedComponent } from './app/saved/saved.component';
import { SettingsComponent } from './app/settings/settings.component';
import { SetupComponent } from './app/setup/setup.component';
import { SignUpComponent } from './app/sign-up/sign-up.component';
import { StatisticsComponent } from './app/statistics/statistics.component';
import { WebcamComponent } from './app/webcam/webcam.component';
import { VerifyComponent } from './app/verify/verify.component';

const routes: Routes = [
  //Setting up account / login
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about-us', component: AboutUsComponent }, 
  { path: 'sign-up', component: SignUpComponent },
  { path: 'setup', component: SetupComponent },

  //dashboard/home
  { path: 'home', component: HomeComponent },
  { path: 'lessons', component: LessonsComponent},
  { path: 'statistics', component: StatisticsComponent },
  { path: 'notifications', component: NotificationComponent},
  { path: 'saved', component: SavedComponent},
  { path: 'achievements', component: AchievementsComponent},

    //video
    { path: 'view', component: LessonViewComponent},
    { path: 'webcam', component: WebcamComponent},


  //Settings
  { path: 'settings', component: SettingsComponent }, //setting profile98
  { path: 'email', component: EmailComponent},
  { path: 'verify', component: VerifyComponent},
  { path: 'notif-set', component: NotificationSettingsComponent },
  { path: 'feedback', component: FeedbackComponent},
];

bootstrapApplication(AppComponent, appConfig).catch((err)=>console.error(err));