import { Storage } from "@ionic/storage";
import { Injectable } from "@angular/core";
import { Day } from "../../DTOs/Day";
import { DayCompletionState } from "../../enums/DayCompletionState";
import { Goal } from "../../DTOs/Goal";

/*
  Generated class for the GoalStoreProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GoalStoreProvider {

  constructor (public storage: Storage){
  }

  public getGoals (): Promise<Array<Goal>> {
    return this.storage.get("goals");
  }

  public getTodaysGoals (): Promise<Array<Goal>> {
    return this.getGoals().then((goals) => {
      if (!goals) {
        return [];
      }
      return goals.filter((goal) => {
          return goal.dateTime.getDate() === new Date().getDate();
        });
      });
  }

  public saveGoals (goals: Array<Goal>){
    this.storage.set("goals", goals);
  }

  public saveDays (days: Array<Day>) {
    this.storage.set("days", days);
  }

  public getDays (): Promise<Array<Day>> {
    return this.storage.get("days");
  }

  public createFakeDays () {
    const day1 = new Day();
    day1.incrementGoalsCreated();
    day1.incrementGoalsCompleted();
    day1.setDate(new Date(2018, 0, 1));
    day1.addGoalTitle("Title1");
    day1.addGoalTitle("Title2");
    const day2 = new Day();
    day2.incrementGoalsCreated();
    day2.incrementGoalsCreated();
    day2.setDate(new Date(2018, 0, 2));
    day2.addGoalTitle("TitleA");
    day2.addGoalTitle("TitleB");
    const day3 = new Day();
    day3.incrementGoalsCreated();
    day3.incrementGoalsInProgress();
    day3.setDate(new Date(2018, 6, 5));
    day3.addGoalTitle("TitleA");
    day3.addGoalTitle("TitleB");
    return [day1, day2, day3];
  }
}
