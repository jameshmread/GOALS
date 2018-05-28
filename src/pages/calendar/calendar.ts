import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { Calendar } from "@ionic-native/calendar";

@Component({
  selector: "page-calendar",
  templateUrl: "calendar.html"
})
export class CalendarPage {

  public currentYear = new Date().getFullYear();
  public weekDays = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
  public months = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Nov", "Dec"];
  public days = [];

  constructor (public navCtrl: NavController, public navParams: NavParams, public calendar: Calendar) {
    this.createEmptyYear();
  }

  public ionViewDidLoad () {
    console.log("ionViewDidLoad CalendarPage");
  }

  private createEmptyYear () {
    for (let i = 0; i < 52; i++) {
      this.days.push(null);
    }
  }

  // TODO there needs to be a 2D array of days in weeks
  // which can be filled with the appropriate colour etc.
}
