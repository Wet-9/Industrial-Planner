import { Injectable } from '@angular/core';
import { Goal } from './models/goal';

@Injectable({
  providedIn: 'root'
})
export class GoalService {
  private goals: Goal[] = [];

  addGoal(goal: Goal) {
    this.goals.push(goal);
  }

  getGoals(): Goal[] {
    return this.goals;
  }
  
}

