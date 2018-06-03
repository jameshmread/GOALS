import { Storage } from "@ionic/storage";
import { Injectable } from "@angular/core";
import { Day } from "../../DTOs/Day";
import { DayCompletionState } from "../../enums/DayCompletionState";
import { Goal } from "../../DTOs/Goal";

@Injectable()
export class GoalStoreProvider {

  public days: Array<Day> = [];

  constructor (public storage: Storage){
    this.storage.get("days").then((daysFromStorage) => {
      if (daysFromStorage !== null) {
        console.log("Days retrieved from storage");
        this.days = daysFromStorage;
      }
    });
  }

  public saveNewDay (dayToSave: Day) {
    if (this.dayExists(dayToSave)) {
      this.editExistingDay(dayToSave);
    } else {
      this.setNewDay(dayToSave);
    }
  }

  public getDays () {
    return this.days;
  }

  public saveAllToStorageOnExit () {
    this.storage.set("days", this.days);
  }

  private dayExists (newDay: Day): boolean {
    if (this.days.length === 0 || this.days === void 0) { return false; }
    this.days = this.days.filter((day) => day !== void 0);
    return this.days.filter((day) => day.date.getTime() === newDay.date.getTime()).length !== 0;
  }

  private editExistingDay (dayToEdit: Day) {
    this.days.pop();
    this.days.push(dayToEdit);
  }

  private setNewDay (newDay: Day) {
    this.days.push(newDay);
  }
}
