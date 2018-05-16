import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AddGoalPage } from '../add-goal/add-goal';
import { GoalDetailsPage } from '../goal-details/goal-details';
import { GoalStoreProvider } from '../../providers/goal-store/goal-store';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  public items = [];
 
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public goalService: GoalStoreProvider) {
    this.goalService.getGoals().then((todos) => {
 
      if(todos){
        this.items = todos;
      }
 
    });
  }
 
  ionViewDidLoad(){
 
  }
 
  addItem(){
 
    let addModal = this.modalCtrl.create(AddGoalPage);
 
    addModal.onDidDismiss((item) => {
          if(item){
            this.saveItem(item);
          }
    });
 
    addModal.present();
 
  }
 
  saveItem(item){
    this.items.push(item);
    this.goalService.save(this.items);
  }
 
  viewItem(item){
    this.navCtrl.push(GoalDetailsPage, {
      item: item
    });
  }
}
