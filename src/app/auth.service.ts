import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/Models/User';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
token:string;
userlist:User[];
currentuser:any;
  constructor(private route:Router,private userservice:UserService) { }

  getUserToken(empDetails:User)
  {
    {{debugger}}
    console.log(empDetails);
     this.userlist=this.userservice.getAllUsers();
     this.currentuser=this.userlist.filter(x=>x.username==empDetails.username && x.password==empDetails.password);
     console.log(this.currentuser);
    // if(empDetails.username=="admin" && empDetails.password=="abcd")
    if(this.currentuser.length>0)
    {
    //console.log(empDetails.username);
       this.token=empDetails.username;
    }
    else
    this.token="";
    //return this.token;
  }
  SaveToken()
  {
    localStorage.setItem("token",this.token);
  }

  IsLoggedIn()
  {
    
    return localStorage.getItem("token")!=null;
  }

  Logout()
  {
    localStorage.clear();
    this.route.navigateByUrl('/login');
  }

  getToken()
  {
    return localStorage.getItem("token")||'';
  }
}
