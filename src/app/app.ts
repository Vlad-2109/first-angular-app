import { Component } from '@angular/core';
import { HeaderComponent } from './header';
import { UserComponent } from './user';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  users = DUMMY_USERS;

  onSelectUser(id: string) {
    console.log('Selected user with id: ', id);
  }
}
