import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../userservice';
import { User } from '../user1';

@Component({
  selector: 'templatedrivenform',
  templateUrl: './templatedrivenform.component.html',
  styleUrls: ['./templatedrivenform.component.css']
})
export class TemplatedrivenformComponent implements OnInit {

  unamePattern = "^[a-z0-9_-]{8,15}$";
  pwdPattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$";
  mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$"; 
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  isValidFormSubmitted = false;
  validateEmail = true;
  user = new User();

  constructor(private userService: UserService) {  }
  ngOnInit() {  }
  
  onFormSubmit(form: NgForm) {
     this.isValidFormSubmitted = false;
     if (form.invalid) {
        return;
     }
     this.isValidFormSubmitted = true;
     this.user = form.value;
     this.userService.createUser(this.user);
     this.user = new User();
     form.resetForm();
  }
}
