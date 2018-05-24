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
    this.title = this.navParams.get("item").title;
    this.description = this.navParams.get("item").description;
    this.dateDue = this.navParams.get("item").dateTime;
    this.type = this.navParams.get("item").type;
    this.maxCompletion = this.navParams.get("item").maxCompletion;
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
