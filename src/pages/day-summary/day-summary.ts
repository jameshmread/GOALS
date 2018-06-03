import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { DayCompletionState } from "../../enums/DayCompletionState";
import { Goal } from "../../DTOs/Goal";

@Component({
  selector: "page-day-summary",
  templateUrl: "day-summary.html"
})
export class DaySummaryPage {

  public completionState: DayCompletionState;
  public goals: Array<Goal> = [];
  public date: any;
  public goalComplete: Array<boolean>;

  constructor (public navCtrl: NavController, public navParams: NavParams) {
    this.completionState = this.navParams.get("day").completionState;
    this.goals = this.navParams.get("day").goals;
    this.date = this.navParams.get("day").date;
    this.date = this.date.getDate() + "/"
      + (this.date.getMonth() + 1) + "/" + this.date.getFullYear();
    this.goalComplete = this.goals.map((goal) => {
      return (goal.maxCompletion - goal.currentCompletion) === 0;
    });
  }

  public ionViewDidLoad () {
    console.log("ionViewDidLoad DaySummaryPage");
  }

}
