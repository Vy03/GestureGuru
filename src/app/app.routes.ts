import { Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { LessonsComponent } from './lessons/lessons.component';
import { LoginComponent } from './login/login.component';
import { NotificationSettingsComponent } from './notification-settings/notification-settings.component';
import { SettingsComponent } from './settings/settings.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { StatisticsComponent } from './statistics/statistics.component';

import { AchievementsComponent } from './achievements/achievements.component';
import { EmailComponent } from './email/email.component';
import { LessonViewComponent } from './lesson-view/lesson-view.component';
import { NotificationComponent } from './notification/notification.component';
import { SavedComponent } from './saved/saved.component';
import { SetupComponent } from './setup/setup.component';
import { WebcamComponent } from './webcam/webcam.component';

export const routes: Routes = [
  // Setting up account / login
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about-us', component: AboutUsComponent }, 
  { path: 'sign-up', component: SignUpComponent },
  { path: 'setup', component: SetupComponent },

  // Dashboard/home
  { path: 'home', component: HomeComponent },
  { path: 'lessons', component: LessonsComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'notifications', component: NotificationComponent },
  { path: 'saved', component: SavedComponent },
  { path: 'achievements', component: AchievementsComponent },

  // Video
  { path: 'view/:name', component: LessonViewComponent },
  { path: 'webcam/:name/:id', component: WebcamComponent },

  // Settings
  { path: 'settings', component: SettingsComponent },
  { path: 'email', component: EmailComponent },
  { path: 'notif-set', component: NotificationSettingsComponent },
  { path: 'feedback', component: FeedbackComponent },
];
