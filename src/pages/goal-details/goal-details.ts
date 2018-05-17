import { Component } from "@angular/core";
import { NavParams } from "ionic-angular";

@Component({
  selector: "goal-details",
  templateUrl: "goal-details.html"
})
export class GoalDetailsPage {

  public title;
  public description;
  public dateDue;
  public type;

  constructor (public navParams: NavParams){

  }

  public ionViewDidLoad () {
    this.title = this.navParams.get("item").title;
    this.description = this.navParams.get("item").description;
    this.dateDue = this.navParams.get("item").dateTime;
    this.type = this.navParams.get("item").type;
  }

}
