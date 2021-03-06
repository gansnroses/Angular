import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { PasswordValidation } from '../PasswordValidation';

@Component({
  selector: 'changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  form: FormGroup;
 /* constructor(fb: FormBuilder)
  {
    this.form = fb.group({
    // define your control in you form
      password: [""],
      confirmPassword: ['']
    })
  }
*/

constructor(fb: FormBuilder)
  {
    this.form = fb.group({
                           password: ['', Validators.required],
                           confirmPassword: ['', Validators.required]
                          },
                          {
                           validator: PasswordValidation.MatchPassword
                          // your validation method
                        })
  }
  
  ngOnInit() {  }
  onSubmit() {
    console.log(this.form);
  }
}