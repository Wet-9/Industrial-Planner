import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { TaskService } from '../task.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage implements OnInit {
  task: Task = {
    id: '',
    name: '',
    description: '',
    date_of_start: '',
    date_of_end: '',
    status: false
  };

  constructor(
    private router: Router, 
    private toastController: ToastController,
    private taskService: TaskService
  ) {}

  async addTask() {

    this.task.id = new Date().getTime().toString();
    this.taskService.addTask({ ...this.task }); // ... = copies


    const toast = await this.toastController.create({
        message: 'Task added successfully.',
        duration: 2000
    });
    toast.present();

    this.task = {
        id: '',
        name: '',
        description: '',
        date_of_start: '',
        date_of_end: '',
        status: false
    };
    
    this.router.navigateByUrl('/tabs/tab1'); 
}

  ngOnInit() {}
}
