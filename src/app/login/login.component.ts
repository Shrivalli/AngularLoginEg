import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/Models/User';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user:User={username:"",password:"",role:""}
userform:FormGroup=new FormGroup({})
errormsg:string;
constructor(private authservice:AuthService,private route:Router) { }

  ngOnInit(): void {
    this.userform=new FormGroup(
      {
        username:new FormControl(this.user.username,[
          Validators.required, Validators.minLength(5)
        ]),
        password:new FormControl(this.user.password,[
          Validators.required,Validators.maxLength(10)
        ]),
        role:new FormControl(this.user.role,[
          Validators.required])
      }
    );
    }

    login():void
    {
      
      let currentuser={"username":this.userform.value.username,"password":this.userform.value.password,"role":this.userform.value.role}
      try{
      this.authservice.getUserToken(currentuser);
      if(this.authservice.token!="")
      {
      localStorage.setItem("token",this.authservice.token);
      this.route.navigateByUrl('/dashboard');
      }
      else{
        this.errormsg="Credentials Incorrect";
        this.route.navigateByUrl('/login');
      }
    }
    catch(Exception)
    {
      this.errormsg="Credentials Incrorrect";
    }
    
    }
    
  }



