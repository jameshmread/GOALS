import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LocalNotifications } from "@ionic-native/local-notifications";
import { Goal } from "../../DTOs/Goal";

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

  public scheduleUnfinishedGoals (goals: Array<Goal>) {
    const unfinishedGoals = goals.filter((goal) => goal.currentCompletion < goal.maxCompletion);
    const timeToday = new Date();
    timeToday.setHours(12, 0, 0, 0);
    this.notifications.schedule({
      text: "You have " + unfinishedGoals.length + " Unfinished Goals for Today!",
      trigger: {at: timeToday},
      led: "#32db64"
   });

    timeToday.setHours(18, 0, 0, 0);
    this.notifications.schedule({
      text: "You have " + unfinishedGoals.length + " Unfinished Goals for Today!",
      trigger: {at: timeToday},
      led: "#32db64"
   });
  }

  public cancelAll () {
    this.notifications.cancelAll();
  }

}
