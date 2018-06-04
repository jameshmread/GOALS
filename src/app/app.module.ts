import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { IonicApp, IonicErrorHandler, IonicModule, ToastController } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { IonicStorageModule } from "@ionic/storage";
import { ScreenOrientation } from "@ionic-native/screen-orientation";
import { LocalNotifications } from "@ionic-native/local-notifications";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { AddGoalPage } from "../pages/add-goal/add-goal";
import { GoalDetailsPage } from "../pages/goal-details/goal-details";
import { GoalStoreProvider } from "../providers/goal-store/goal-store";
import { CalendarPage } from "../pages/calendar/calendar";
import { Calendar } from "@ionic-native/calendar";
import { DaySummaryPage } from "../pages/day-summary/day-summary";
import { NotificationsProvider } from "../providers/notifications/notifications";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddGoalPage,
    GoalDetailsPage,
    CalendarPage,
    DaySummaryPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddGoalPage,
    GoalDetailsPage,
    CalendarPage,
    DaySummaryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GoalStoreProvider,
    ToastController,
    Calendar,
    ScreenOrientation,
    LocalNotifications,
    NotificationsProvider
  ]
})
export class AppModule {}
