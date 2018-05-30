import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { Calendar } from "@ionic-native/calendar";
import { Day } from "../../DTOs/Day";
import { DayCompletionState } from "../../enums/DayCompletionState";
import { DaySummaryPage } from "../day-summary/day-summary";

@Component({
  selector: "page-calendar",
  templateUrl: "calendar.html"
})
export class CalendarPage {

  public currentYear = new Date().getFullYear();
  public weekDays = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
  public months = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Nov", "Dec"];
  public days: Array<Array<Day>>;

  constructor (public navCtrl: NavController, public navParams: NavParams, public calendar: Calendar) {
    this.createEmptyYear();
  }

  public ionViewDidLoad () {
    console.log("ionViewDidLoad CalendarPage");
  }

  public openDaySummary (day: Day) {
    this.navCtrl.push(DaySummaryPage, {day});
  }

  private createEmptyYear () {
    this.days = new Array(52);
    for (let i = 0; i < 52; i++) {
      this.days[i] = new Array(7);
      for (let j = 0; j < 7; j++) {
        this.days[i][j] = new Day();
        this.days[i][j].setCompletionState(DayCompletionState.noneStarted);
      }
    }
    console.table(this.days);
  }
}
