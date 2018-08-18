import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators, FormControl, AbstractControl} from '@angular/forms';

@Component({
  selector: 'email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  emailForm: FormGroup;
  email: AbstractControl;

  constructor(private builder: FormBuilder) {
    this.emailForm = this.builder.group({
                                         //  email: ['', Validators.required]
                                          email: ['', Validators.compose([Validators.required,
                                                                          Validators.pattern(this.emailPattern),
                                                                          this.checkIfA])]
                                       });
    this.email = this.emailForm.controls['email'];                                   
   }

  ngOnInit() {  }

  checkIfA(fieldControl: FormControl){
    return fieldControl.value[0] === 'a' ? null : { notA: true };
  }
}








//https://kirjai.com/validation-model-driven-forms-ng2/