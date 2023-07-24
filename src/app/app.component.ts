import { Component, OnInit } from '@angular/core';
import {RouterModule} from '@angular/router'
import { AuthService } from './auth.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  flag=false;
  username:string;
  title = 'BankingPrj';
local:any;
  constructor(public authservice:AuthService)
  {

    this.username=this.authservice.getToken();
    console.log(this.username);
  }

  logout()
  {
    this.authservice.Logout();
  }

  ngOnInit(): void {
    this.local=localStorage;
  }

}
