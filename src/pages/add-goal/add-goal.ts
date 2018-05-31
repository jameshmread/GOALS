import { Component } from "@angular/core";
import { NavController, ViewController } from "ionic-angular";
import { Goal } from "../../DTOs/Goal";

@Component({
  selector: "add-goal",
  templateUrl: "add-goal.html"
})
export class AddGoalPage {

  public title: string;
  public description: string;
  public type: string;
  public maximumCompletion = 1;
  public repeatInterval: string;
  constructor (public navCtrl: NavController, public view: ViewController) {

  }

  public saveGoal (){
    const newGoal = new Goal(
      this.title,
      this.description,
      new Date(),
      this.type,
      this.maximumCompletion
    );

    if (newGoal.title !== void 0) {
      this.view.dismiss(newGoal);
    } else {
      this.close();
    }

  }

  public close (){
    this.view.dismiss();
  }
}
