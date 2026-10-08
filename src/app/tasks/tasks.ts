import { Component, Input } from '@angular/core';

import { TaskComponent } from './task/task';
import { NewTaskComponent } from './new-task';
import { TasksService } from './tasks.service';
import type { NewTask } from './task/task.model';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class TasksComponent {
  @Input({ required: true }) selectedUserId!: string;
  @Input({ required: true }) selectedUserName!: string;
  isAddingTask = false;
  
  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.selectedUserId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
