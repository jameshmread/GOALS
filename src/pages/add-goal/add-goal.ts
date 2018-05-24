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
  public dateTime;
  public type: string;
  public maximumCompletion = 1;

  constructor (public navCtrl: NavController, public view: ViewController) {

  }

  public saveItem (){
    const newGoal = new Goal(
      this.title,
      this.description,
      this.dateTime,
      this.type,
      this.maximumCompletion
    );

    if (newGoal.title !== void 0) {
      this.view.dismiss(newGoal);
    } else {
      this.close();
      // would be nice to have a toaster notification saying
      // that no title existed so no goal was made.
    }

  }

  public close (){
    this.view.dismiss();
  }
}