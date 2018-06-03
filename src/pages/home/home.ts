import { Component } from "@angular/core";
import { NavController, ModalController, ToastController } from "ionic-angular";
import { AddGoalPage } from "../add-goal/add-goal";
import { GoalDetailsPage } from "../goal-details/goal-details";
import { GoalStoreProvider } from "../../providers/goal-store/goal-store";
import { Goal } from "../../DTOs/Goal";
import { CalendarPage } from "../calendar/calendar";
import { Day } from "../../DTOs/Day";
import { ScreenOrientation } from "@ionic-native/screen-orientation";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {

  public currentDay: Day;

  constructor (
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public goalService: GoalStoreProvider,
    public toast: ToastController,
    public screen: ScreenOrientation
  ) {
  }

  public ionViewDidLoad () {
    console.log("LOADED home");
    const currentDay = this.getCurrentDay();
    if (currentDay !== void 0 && currentDay !== null) {
      this.currentDay = currentDay;
    } else {
      this.createToday();
    }
    console.log(this.currentDay);
    this.goalService.saveNewDay(currentDay);
  }

  public ionViewWillEnter () {
    // this.screen.lock("portrait");
    // this.screen.unlock();
  }

  public ionViewWillLeave () {
    this.goalService.saveNewDay(this.currentDay);
  }

  public addGoal (){
    const addModal = this.modalCtrl.create(AddGoalPage);
    addModal.onDidDismiss((goal: Goal) => {
      if (goal){
        this.currentDay.goals.push(goal);
      } else {
        this.goalFailedToAdd_Toast();
      }
    });
    addModal.present();
  }

  public editGoal (goal: Goal){
    const editModal = this.modalCtrl.create(GoalDetailsPage, {goal});
    editModal.onDidDismiss((editedGoal: Goal) => {
      if (editedGoal !== goal && editedGoal !== void 0){
        const index = this.currentDay.goals.indexOf(goal);
        this.currentDay.goals[index].description = editedGoal.description;
      }
    });
    editModal.present();
  }

  public incrementCompletion (goal: Goal) {
    const index = this.currentDay.goals.indexOf(goal);
    if (this.currentDay.goals[index].currentCompletion < this.currentDay.goals[index].maxCompletion) {
      this.currentDay.goals[index].currentCompletion++;
    }
  }

  public deleteGoal (goal: Goal) {
    this.currentDay.goals = this.currentDay.goals.filter((item) => item !== goal);
  }

  public showCalendar () {
    this.navCtrl.push(CalendarPage);
  }

  public deleteDB () {
    this.goalService.storage.clear();
  }

  private goalFailedToAdd_Toast () {
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

  private noGoalsFound_Toast () {
    const toast = this.toast.create({
      message: "No Goals Found, Create Some For Today.",
      duration: 4500,
      position: "top"
    });
    toast.onDidDismiss(() => {
      console.log("Dismissed toast");
    });
    toast.present();
  }

  private getCurrentDay (): Day {
    const days = this.goalService.getDays();
    if (days === null) { return void 0; }
    return days.filter((day: Day) => day.date.getTime() === new Date().getTime())[0];
  }

  private createToday () {
    this.currentDay = new Day();
    const todaysDate = new Date();
    todaysDate.setHours(0, 0, 0, 0);
    this.currentDay.date = todaysDate;
  }
}
