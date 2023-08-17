import { Injectable } from '@angular/core';
import { Task } from './models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];

  constructor() { }


  addTask(task: Task) {
      this.tasks.push(task);
  }
  
  getTasks(): Task[] {
      return this.tasks;
  }


  // No clue what this does but it helped removed the task!
  markTaskAsDone(task: Task) {
    const index = this.tasks.findIndex(t => t.id === task.id);
    if (index !== -1) {
        this.tasks[index].status = true;
    }
}

}
