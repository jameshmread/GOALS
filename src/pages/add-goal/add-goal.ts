import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
 
@Component({
  selector: 'add-goal',
  templateUrl: 'add-goal.html'
})
export class AddGoalPage {
 
  title: string;
  description: string;
  dateTime;
  type: string;
  constructor(public navCtrl: NavController, public view: ViewController) {
 
  }
 
  saveItem(){
 
    let newItem = {
      title: this.title,
      description: this.description,
      dateTime: this.dateTime,
      type: this.type
    };
 
    if (newItem.title) {
      this.view.dismiss(newItem);
    } else {
      this.close();
      // would be nice to have a toaster notification saying
      // that no title existed so no goal was made.
    }
    
  }
  
  close(){
    this.view.dismiss();
  }

  public incrementCompletion() {
    throw Error("Function not implemented / in wrong place");
  }
 
}
