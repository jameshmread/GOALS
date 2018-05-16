import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

/*
  Generated class for the GoalStoreProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GoalStoreProvider {

  constructor(public storage: Storage){
 
  }
 
  public getGoals() {
    return this.storage.get('goals'); 
  }
 
  public save(goals){
    this.storage.set('goals', goals);
  }

}
