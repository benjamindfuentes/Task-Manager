import { Component, Input, input, computed, Output, EventEmitter } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
    selector: 'app-user',
    standalone: true,
    imports: [CardComponent],
    templateUrl: './user.component.html',
    styleUrl: './user.component.css'
  })
  export class UserComponent {
    // required tells angular this property must be set
    // results in error if property is missing in app component html
    // @Input({ required: true }) avatar!: string;
    // @Input({ required: true }) name!: string;
    // @Input({ required: true }) id!: string;

    // this replaces the above and user is not injected everywhere each 
    // individual property was used
    @Input({ required:true }) user!: User;
    @Input({ required: true }) selected!: boolean;
    @Output() select = new EventEmitter<string>();

   
    get imagePath() {
      return 'assets/users/' + this.user.avatar;
    }

    // on-click function
    onSelectUser() {
      this.select.emit(this.user.id);
    }
  }

  // better way of doing component inputs see doc why its  commented out
  // both of these are signal values so must be called as such
  // avatar = input.required<string>();
  // name = input.required<string>();

  // get imagePath() {
  //   return 'assets/users/' + this.avatar;
  // }