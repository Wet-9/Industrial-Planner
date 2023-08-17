import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../models/task';
import { ToastController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService, private toastController: ToastController) {}

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }
  ionViewDidEnter() {
    this.tasks = this.taskService.getTasks();
  }
  
  
  taskDone(event: any, task: Task) {
    if (event.detail.checked) {
        this.taskService.markTaskAsDone(task);
        this.tasks = this.tasks.filter(t => !t.status);
    }
}
}
