import { Component, Input } from '@angular/core';
import { UsersService } from "app/users.service";

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  constructor(private userService: UsersService){}
  @Input() users: string[];
 // @Output() userSetToInactive = new EventEmitter<number>();

  onSetToInactive(id: number) {
    //this.userSetToInactive.emit(id);
    this.userService.onSetToInactive(id);
  }
}
