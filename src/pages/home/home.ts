import { Component } from "@angular/core";
import { NavController, ModalController, ToastController } from "ionic-angular";
import { AddGoalPage } from "../add-goal/add-goal";
import { GoalDetailsPage } from "../goal-details/goal-details";
import { GoalStoreProvider } from "../../providers/goal-store/goal-store";
import { Goal } from "../../DTOs/Goal";
import { CalendarPage } from "../calendar/calendar";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {

  public items: Array<Goal> = [];
  constructor (
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public goalService: GoalStoreProvider,
    public toast: ToastController
  ) {
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
      } else {
        this.itemFailedToAdd();
      }
    });
    addModal.present();
  }

  public itemFailedToAdd () {
      const toast = this.toast.create({
        message: "Goal Not Saved.",
        duration: 3000,
        position: "top"
      });
      toast.onDidDismiss(() => {
        console.log("Dismissed toast");
      });
      toast.present();
  }

  public saveItem (item: Goal){
    this.items.push(item);
    this.goalService.save(this.items);
  }

  public viewItem (item: Goal){
    const editModal = this.modalCtrl.create(GoalDetailsPage, {item});

    editModal.onDidDismiss((editedGoal) => {
      if (editedGoal !== item && editedGoal !== void 0){
        const index = this.items.indexOf(item);
        this.items[index] = editedGoal;
        this.goalService.save(this.items);
      }
    });

    editModal.present();
  }

  public incrementCompletion (item: Goal) {
    const index = this.items.indexOf(item);
    if (this.items[index].currentCompletion < this.items[index].maxCompletion) {
      this.items[index].currentCompletion++;
    }
  }

  public deleteGoal (goal: Goal) {
    this.items = this.items.filter((item) => item !== goal);
    this.goalService.save(this.items);
  }

  public showCalendar () {
    this.navCtrl.push(CalendarPage);
  }
}
