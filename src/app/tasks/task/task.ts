import { Component, EventEmitter, Input, Output } from '@angular/core';
import type { Task } from './task.model';
import { CardComponent } from '../../shared/card';

@Component({
  selector: 'app-task',
  imports: [CardComponent],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    this.complete.emit(this.task.id);
  }
}
