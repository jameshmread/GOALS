import { Storage } from "@ionic/storage";
import { Injectable } from "@angular/core";
import { Day } from "../../DTOs/Day";
import { IDay } from "../../interfaces/IDay";
import { DayCompletionState } from "../../enums/DayCompletionState";
import { Goal } from "../../DTOs/Goal";

@Injectable()
export class GoalStoreProvider {

  public days: Array<IDay> = [];

  constructor (public storage: Storage){
    this.storage.get("days").then((daysFromStorage) => {
      if (daysFromStorage !== null) {
        this.days = daysFromStorage;
      }
    });
    document.addEventListener("pause", this.saveAllToStorageOnExit, false);
  }

  public saveNewDay (dayToSave: IDay) {
      if (this.dayExists(dayToSave)) {
        this.editExistingDay(dayToSave);
      } else {
        this.setNewDay(dayToSave);
      }
  }

  public getDays () {
    return this.days;
  }

  public createRandomDays () {
    let startDate = new Date(new Date().getFullYear(), 0, 0);
    for (let i = 0; i < 300; i++) {
      const day = new Day();
      day.date = new Date(startDate.setDate(startDate.getDate() + 1));
      const goal = new Goal("NAME", "Description...", startDate, "", 1);
      goal.currentCompletion = 1;
      goal.maxCompletion = 1;
      day.goals = [goal, goal, goal];
      this.days.push(day);
    }
    console.log(this.days);
  }

  public saveAllToStorageOnExit () {
    this.storage.set("days", this.days);
  }

  private dayExists (newDay: IDay): boolean {
    if (this.days.length > 0) { return false; }
    return this.days.filter((day) => day.date.getTime() === newDay.date.getTime()).length !== 0;
  }

  private editExistingDay (dayToEdit: IDay) {
    this.days.pop();
    this.days.push(dayToEdit);
  }

  private setNewDay (newDay: IDay) {
    this.days.push(newDay);
  }
}
