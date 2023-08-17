import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { GoalService } from '../goal.service';
import { Goal } from '../models/goal';

@Component({
  selector: 'app-add-goal',
  templateUrl: './add-goal.page.html',
  styleUrls: ['./add-goal.page.scss'],
})
export class AddGoalPage implements OnInit {
  goal: Goal = {
    id: '',
    name: '',
    description: '',
    deadline: '',
    completed: false
  };

  constructor(
    private router: Router, 
    private toastController: ToastController,
    private goalService: GoalService
  ) {}

  async addGoal() {
    this.goal.id = new Date().getTime().toString();
    this.goalService.addGoal({ ...this.goal });
    
    const toast = await this.toastController.create({
      message: 'Goal added successfully.',
      duration: 2000
    });
    toast.present();

    this.router.navigateByUrl('/tabs/tab2'); 
  }

  ngOnInit() {}
}
