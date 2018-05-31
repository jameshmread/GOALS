import { Component } from "@angular/core";
import { NavParams, ViewController } from "ionic-angular";
import { Goal } from "../../DTOs/Goal";

@Component({
  selector: "goal-details",
  templateUrl: "goal-details.html"
})
export class GoalDetailsPage {

  public title;
  public description;
  public dateDue;
  public type;
  private maxCompletion;
  constructor (public navParams: NavParams, public view: ViewController){

  }

  public ionViewDidLoad () {
    this.title = this.navParams.get("goal").title;
    this.description = this.navParams.get("goal").description;
    this.dateDue = this.navParams.get("goal").dateTime;
    this.type = this.navParams.get("goal").type;
    this.maxCompletion = this.navParams.get("goal").maxCompletion;
  }

  public saveChanges () {
    this.view.dismiss(new Goal(
      this.title,
      this.description,
      this.dateDue,
      this.type,
      this.maxCompletion
    ));
  }

}
