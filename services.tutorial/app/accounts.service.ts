
import { LoggingService } from "app/logging.service";
import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class AccountsService {
    accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

    statusUpdated = new EventEmitter<string>();

    constructor(private loggingService: LoggingService){}

    addAccount (name: string, status: string){
        this.accounts.push({name: name, status: status});
       this.loggingService.logStatusChange(status);
    }

    updateStatus(updateInfo: {id: number, status: string}){
        this.accounts[updateInfo.id].status = updateInfo.status;
        this.loggingService.logStatusChange(updateInfo.status);
     }

}