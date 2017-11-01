import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit() {
    this.accounts = this.accountsService.accounts;
  }
  accounts: { name: string, status: string }[] = [];
constructor(private accountsService: AccountsService){}

}
