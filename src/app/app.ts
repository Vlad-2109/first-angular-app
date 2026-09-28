import { Component } from '@angular/core';

import { DUMMY_USERS } from './dummy-users';
import { HeaderComponent } from './header';
import { UserComponent } from './user';
import { TasksComponent } from './tasks';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  users = DUMMY_USERS;
  selectedUserId!: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
