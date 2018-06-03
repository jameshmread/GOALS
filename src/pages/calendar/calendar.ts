import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { Day } from "../../DTOs/Day";
import { DayCompletionState } from "../../enums/DayCompletionState";
import { DaySummaryPage } from "../day-summary/day-summary";
import { GoalStoreProvider } from "../../providers/goal-store/goal-store";
import { ScreenOrientation } from "@ionic-native/screen-orientation";

@Component({
  selector: "page-calendar",
  templateUrl: "calendar.html"
})
export class CalendarPage {

  public currentYear = new Date().getFullYear();
  public weekDays = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
  public months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Nov", "Dec"];
  public days: Array<Array<Day>>;

  constructor (
    public navCtrl: NavController,
    public navParams: NavParams,
    public store: GoalStoreProvider,
    public screen: ScreenOrientation
  ) {
    this.createEmptyYear();
  }

  public ionViewDidLoad () {
    console.log("ionViewDidLoad CalendarPage");
  }

  public ionViewWillEnter () {
    this.setDayInformation();
    // this.screen.lock("landscape");
  }

  public openDaySummary (day: Day) {
    this.navCtrl.push(DaySummaryPage, {day});
  }

  private createEmptyYear () {
    let startDate = new Date(new Date().getFullYear(), 0, 0);
    this.days = new Array(52);
    for (let i = 0; i < 52; i++) {
      this.days[i] = new Array(7);
      for (let j = 0; j < 7; j++) {
        this.days[i][j] = new Day();
        this.days[i][j].date = startDate;
        startDate = new Date(startDate.setDate(startDate.getDate() + 1));
      }
    }
  }

  private setDayInformation () {
    const allDays = this.store.getDays();
    console.log(allDays);
    let savedDaysIndex = 0;
    for (let i = 0; i < 52; i++) {
      for (let j = 0; j < 7; j++) {
        if (allDays[savedDaysIndex] !== void 0) {
          if (new Date(this.days[i][j].date).getTime() ===
            new Date(allDays[savedDaysIndex].date).getTime()) {
            this.days[i][j] = allDays[savedDaysIndex];
            this.days[i][j].setCompletionState();
            savedDaysIndex++;
          }
        }
      }
    }
  }
}
