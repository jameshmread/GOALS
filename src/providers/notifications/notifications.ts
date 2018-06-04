import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LocalNotifications } from "@ionic-native/local-notifications";

@Injectable()
export class NotificationsProvider {

  constructor (public http: HttpClient, public notifications: LocalNotifications) {
    console.log("Hello NotificationsProvider Provider");
  }

  public displayGenericUnfinished () {
    this.notifications.schedule({
      id: 1,
      text: "You have Unfinished Goals for Today!"
    });
  }

}
