
import { Injectable } from "@angular/core";
import { CounterService } from "app/counter.service";

@Injectable()
export class UsersService{
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    constructor(private counterService: CounterService){}

    onSetToInactive(id: number) {
        this.counterService.addCounter("inactive");
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        
      }
    
      onSetToActive(id: number) {
        this.counterService.addCounter("active");
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
      }

      getCounters(){
          return this.counterService.counters;
      }
}