import { Component, OnInit } from '@angular/core';
import { GoalService } from '../goal.service';
import { Goal } from '../models/goal';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  goals: Goal[] = [];

  constructor(private goalService: GoalService, private toastController: ToastController) {}

  ngOnInit() {
    this.goals = this.goalService.getGoals();
  }

  ionViewDidEnter() {
    this.goals = this.goalService.getGoals();
  }
  
  async goalDone(event: any, goal: Goal) {
    if (event.detail.checked) {
        const toast = await this.toastController.create({
            message: 'This goal has been completed.',
            duration: 2000
        });
        toast.present();

        goal.completed = true;
        this.filterCompletedGoals();
    }
}

// Marks as done 
filterCompletedGoals() {
    this.goals = this.goals.filter(goal => !goal.completed);
}
}
