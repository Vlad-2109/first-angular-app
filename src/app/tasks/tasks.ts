import { Component, Input } from '@angular/core';

import { TaskComponent } from './task/task';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class TasksComponent {
  @Input() selectedUserName?: string;
}
