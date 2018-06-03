import { Component } from "@angular/core";
import { Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { HomePage } from "../pages/home/home";
import { GoalStoreProvider } from "../providers/goal-store/goal-store";
@Component({
  templateUrl: "app.html"
})
export class MyApp {
  public rootPage: any = HomePage;

  constructor (
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    store: GoalStoreProvider
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      platform.pause.subscribe(() => store.saveAllToStorageOnExit() );
    });
  }
}

