import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { Day } from "../../DTOs/Day";
import { DayCompletionState } from "../../enums/DayCompletionState";
import { DaySummaryPage } from "../day-summary/day-summary";
import { GoalStoreProvider } from "../../providers/goal-store/goal-store";

@Component({
  selector: "page-calendar",
  templateUrl: "calendar.html"
})
export class CalendarPage {

  public currentYear = new Date().getFullYear();
  public weekDays = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
  public months = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Nov", "Dec"];
  public days: Array<Array<Day>>;

  constructor (
    public navCtrl: NavController,
    public navParams: NavParams,
    public store: GoalStoreProvider
  ) {
    this.createEmptyYear();
    this.setDayInformation();
  }

  public ionViewDidLoad () {
    console.log("ionViewDidLoad CalendarPage");
  }

  public openDaySummary (day: Day) {
    this.navCtrl.push(DaySummaryPage, {day});
  }

  private createEmptyYear () {
    let startDate = new Date(new Date().getFullYear(), 0, 1);
    this.days = new Array(52);
    for (let i = 0; i < 52; i++) {
      this.days[i] = new Array(7);
      for (let j = 0; j < 7; j++) {
        this.days[i][j] = new Day();
        this.days[i][j].setDate(startDate);
        startDate = new Date(startDate.setDate(startDate.getDate() + 1));
      }
    }
  }

  private setDayInformation () {
    this.store.saveDays(this.store.createFakeDays());
    this.store.getDays().then((allDays) => {
      console.log(allDays);
      let savedDaysIndex = 0;
      for (let i = 0; i < 52; i++) {
        for (let j = 0; j < 7; j++) {
          if (allDays[savedDaysIndex] !== void 0) {
            if (this.days[i][j].getDate().getUTCMilliseconds() === allDays[savedDaysIndex].date.getUTCMilliseconds()){
              this.days[i][j] = allDays[savedDaysIndex];
              savedDaysIndex++;
            }
            // days are not allocated to the correct date on the grid
          }
        }
      }
    });
  }
}
