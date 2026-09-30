import { Component, Input } from '@angular/core';
import type { Task } from '../../dummy-tasks';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
}
