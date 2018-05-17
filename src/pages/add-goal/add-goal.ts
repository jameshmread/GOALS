import { Component } from "@angular/core";
import { NavController, ViewController } from "ionic-angular";

@Component({
  selector: "add-goal",
  templateUrl: "add-goal.html"
})
export class AddGoalPage {

  public title: string;
  public description: string;
  public dateTime;
  public type: string;
  constructor (public navCtrl: NavController, public view: ViewController) {

  }

  public saveItem (){

    const newItem = {
      title: this.title,
      description: this.description,
      dateTime: this.dateTime,
      type: this.type
    };

    if (newItem.title !== void 0) {
      this.view.dismiss(newItem);
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
