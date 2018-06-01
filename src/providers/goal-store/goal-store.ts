import { Storage } from "@ionic/storage";
import { Injectable } from "@angular/core";
import { Day } from "../../DTOs/Day";

/*
  Generated class for the GoalStoreProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GoalStoreProvider {

  constructor (public storage: Storage){
  }

  public saveDays (days: Array<Day>) {
    this.storage.set("days", days);
  }

  public getDays (): Promise<Array<Day>> {
    return this.storage.get("days");
  }
}
