import { Component, OnInit } from '@angular/core';
import { Credential } from './credential';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string="raj";
  password:string="seed";
  status:boolean=false;

  theCredential:Credential=null;

  constructor() { this.theCredential=new Credential();}

   //Lifecycle event handler
  ngOnInit() { }

  checkme(){
    this.status= this.theCredential.validate(this.username, this.password);
    console.log("userName" +this.username);
    console.log("password :"+ this.password);
    console.log("check me is called");
    console.log("Status "+ this.status);
  }
}