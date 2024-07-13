import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { NotificationSettingsComponent } from './notification-settings/notification-settings.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LessonsComponent } from './lessons/lessons.component';
import { StatisticsComponent } from './statistics/statistics.component';

import { LessonViewComponent } from './lesson-view/lesson-view.component';
import { WebcamComponent } from './webcam/webcam.component';
import { NotificationComponent } from './notification/notification.component';
import { SavedComponent } from './saved/saved.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { SetupComponent } from './setup/setup.component';

export const routes: Routes = [
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
  { path: 'notif-set', component: NotificationSettingsComponent },
  { path: 'feedback', component: FeedbackComponent},
];