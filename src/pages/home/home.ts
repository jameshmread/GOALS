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

  public goals: Array<Goal> = [];
  constructor (
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public goalService: GoalStoreProvider,
    public toast: ToastController
  ) {
    this.goalService.getGoals().then((todos) => {
      if (todos){
        this.goals = todos;
      }
    });
  }

  public ionViewDidLoad (){
  }

  public addGoal (){
    const addModal = this.modalCtrl.create(AddGoalPage);
    addModal.onDidDismiss((item) => {
      if (item){
        this.saveGoal(item);
      } else {
        this.goalFailedToAdd();
      }
    });
    addModal.present();
  }

  public goalFailedToAdd () {
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

  public editGoal (goal: Goal){
    const editModal = this.modalCtrl.create(GoalDetailsPage, {goal});

    editModal.onDidDismiss((editedGoal) => {
      if (editedGoal !== goal && editedGoal !== void 0){
        const index = this.goals.indexOf(goal);
        this.goals[index] = editedGoal;
        this.goalService.save(this.goals);
      }
    });

    editModal.present();
  }

  public incrementCompletion (goal: Goal) {
    const index = this.goals.indexOf(goal);
    if (this.goals[index].currentCompletion < this.goals[index].maxCompletion) {
      this.goals[index].currentCompletion++;
    }
  }

  public deleteGoal (goal: Goal) {
    this.goals = this.goals.filter((item) => item !== goal);
    this.goalService.save(this.goals);
  }

  public showCalendar () {
    this.navCtrl.push(CalendarPage);
  }

  public deleteDB () {
    this.goalService.storage.clear();
  }

  private saveGoal (item: Goal){
    this.goals.push(item);
    this.goalService.save(this.goals);
  }
}
