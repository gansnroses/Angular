import { Component, OnInit } from '@angular/core';
import {Credential} from './credential'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;
  status:boolean=false;

  theCredential:Credential=null;

  constructor() { 
    this.theCredential=new Credential();
  }

  //Lifecycle event handler
  ngOnInit() {

    

  }

  CheckMe(){

   

    this.status=this.theCredential.validate(this.username, this.password)
    console.log("check me at")
    console.log("Status ; " + this.status)
    
  }

}
