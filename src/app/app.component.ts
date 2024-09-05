import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser() {
    // find selected user from users variable above storing array of all dummy users
    return this.users.find((user) => user.id === this.selectedUserId)!;
    // uses anonymous function taking in user and checking its id against the selected user id
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
