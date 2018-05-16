import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddGoalPage } from '../pages/add-goal/add-goal';
import { GoalDetailsPage } from '../pages/goal-details/goal-details';
import { GoalStoreProvider } from '../providers/goal-store/goal-store';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddGoalPage,
    GoalDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddGoalPage,
    GoalDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GoalStoreProvider
  ]
})
export class AppModule {}
