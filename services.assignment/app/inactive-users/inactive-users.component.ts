import { Component, Input} from '@angular/core';
import { UsersService } from "app/users.service";

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: string[];
 // @Output() userSetToActive = new EventEmitter<number>();
 constructor(private userService: UsersService){}

  onSetToActive(id: number) {
    //this.userSetToActive.emit(id);
    this.userService.onSetToActive(id);
  }
}
