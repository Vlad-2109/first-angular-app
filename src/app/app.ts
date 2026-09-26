import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header';
import { UserComponent } from './user';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('first-angular-app');
}
