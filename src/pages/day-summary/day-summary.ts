import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { DayCompletionState } from "../../enums/DayCompletionState";

/**
 * Generated class for the DaySummaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-day-summary",
  templateUrl: "day-summary.html"
})
export class DaySummaryPage {

  public completionState: DayCompletionState;
  public goalsCreated: number;
  public goalsCompleted: number;
  public goalsInProgress: number;
  public goalTitles: Array<string>;
  public notStarted: number;
  public date: Date;

  constructor (public navCtrl: NavController, public navParams: NavParams) {
    this.completionState = this.navParams.get("day").completionState;
    this.goalsCreated = this.navParams.get("day").goalsCreated;
    this.goalsCompleted = this.navParams.get("day").goalsCompleted;
    this.goalsInProgress = this.navParams.get("day").goalsInProgress;
    this.goalTitles = this.navParams.get("day").goalTitles;
    this.date = this.navParams.get("day").date;
    this.notStarted = this.goalsCreated - (this.goalsInProgress + this.goalsCompleted);
  }

  public ionViewDidLoad () {
    console.log("ionViewDidLoad DaySummaryPage");
  }

}
