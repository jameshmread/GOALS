import { Storage } from "@ionic/storage";
import { Injectable } from "@angular/core";
import { Day } from "../../DTOs/Day";
import { DayCompletionState } from "../../enums/DayCompletionState";

/*
  Generated class for the GoalStoreProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GoalStoreProvider {

  constructor (public storage: Storage){
  }

  public getGoals () {
    return this.storage.get("goals");
  }

  public save (goals){
    this.storage.set("goals", goals);
  }

  public saveDays (days: Array<Day>) {
    this.storage.set("days", days);
  }

  public getDays () {
    return this.storage.get("days");
  }

  public createFakeDays () {
    const day1 = new Day();
    day1.setCompletionState(DayCompletionState.allComplete);
    day1.incrementGoalsCreated();
    day1.incrementGoalsCompleted();
    day1.setDate(new Date(2018, 0, 1));
    day1.setGoaltitles(["Title1", "Title2"]);
    const day2 = new Day();
    day2.setCompletionState(DayCompletionState.noneStarted);
    day2.incrementGoalsCreated();
    day2.incrementGoalsCreated();
    day2.setDate(new Date(2018, 0, 2));
    day2.setGoaltitles(["TitleA", "TitleN"]);
    const day3 = new Day();
    day3.setCompletionState(DayCompletionState.partiallyComplete);
    day3.incrementGoalsCreated();
    day3.incrementGoalsInProgress();
    day3.setDate(new Date(2018, 0, 4));
    day3.setGoaltitles(["TitleA", "TitleN"]);
    return [day2, day3];
  }
}
