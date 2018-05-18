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

  constructor (public navParams: NavParams, public view: ViewController){

  }

  public ionViewDidLoad () {
    this.title = this.navParams.get("item").title;
    this.description = this.navParams.get("item").description;
    this.dateDue = this.navParams.get("item").dateTime;
    this.type = this.navParams.get("item").type;
  }

  public saveChanges () {
    this.view.dismiss(new Goal(
      this.title,
      this.description,
      this.dateDue,
      this.type
    ));
  }

}
