import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { LandingComponent } from './app/landing/landing.component';
import { LoginComponent } from './app/login/login.component';
import { AboutUsComponent } from './app/about-us/about-us.component'; 
import { SignUpComponent } from './app/sign-up/sign-up.component';
import { HomeComponent } from './app/home/home.component';
import { SettingsComponent } from './app/settings/settings.component';
import { NotificationSettingsComponent } from './app/notification-settings/notification-settings.component';
import { FeedbackComponent } from './app/feedback/feedback.component';
import { LessonsComponent } from './app/lessons/lessons.component';
import { StatisticsComponent } from './app/statistics/statistics.component';
import { NotificationComponent } from './app/notification/notification.component';
import { SavedComponent } from './app/saved/saved.component';
import { AchievementsComponent } from './app/achievements/achievements.component';
import { LessonViewComponent } from './app/lesson-view/lesson-view.component';

const routes: Routes = [
  //Setting up account / login
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about-us', component: AboutUsComponent }, 
  { path: 'sign-up', component: SignUpComponent },

  //dashboard/home
  { path: 'home', component: HomeComponent },
  { path: 'lessons', component: LessonsComponent},
  { path: 'statistics', component: StatisticsComponent },
  { path: 'notifications', component: NotificationComponent},
  { path: 'saved', component: SavedComponent},
  { path: 'achievements', component: AchievementsComponent},

    //video
    { path: 'view', component: LessonViewComponent},


  //Settings
  { path: 'settings', component: SettingsComponent }, //setting profile98
  { path: 'notif-set', component: NotificationSettingsComponent },
  { path: 'feedback', component: FeedbackComponent},
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
  ],
});