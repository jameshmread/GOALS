import { Component } from "@angular/core";
import { NavController, ModalController } from "ionic-angular";
import { AddGoalPage } from "../add-goal/add-goal";
import { GoalDetailsPage } from "../goal-details/goal-details";
import { GoalStoreProvider } from "../../providers/goal-store/goal-store";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {

  public items = [];

  constructor (
    public navCtrl: NavController,
    public modalCtrl: ModalController, public goalService: GoalStoreProvider) {
    this.goalService.getGoals().then((todos) => {

      if (todos){
        this.items = todos;
      }

    });
  }

  public ionViewDidLoad (){

  }

  public addItem (){

    const addModal = this.modalCtrl.create(AddGoalPage);

    addModal.onDidDismiss((item) => {
          if (item){
            this.saveItem(item);
          }
    });

    addModal.present();

  }

  public saveItem (item){
    this.items.push(item);
    this.goalService.save(this.items);
  }

  public viewItem (item){
    this.navCtrl.push(GoalDetailsPage, {item});
  }

  public incrementCompletion () {
    throw Error ("Not implemented yet");
  }

  public deleteGoal (goal) {
    this.items = this.items.filter((item) => item !== goal);
    this.goalService.save(this.items);
  }

}
