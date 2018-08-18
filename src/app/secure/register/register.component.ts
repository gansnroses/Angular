import { Component, OnInit } from '@angular/core';


export class Customer  {
  constructor(public  firstName:string,
              public location:string,
              public memberShip:string,
              public feedback:string,
              public isRegistered:boolean,
              public social:string[]){      
   }
  }

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {


   
  submitted = false;
  locations = ['Pune','Mumbai','Delhi','Bangalore','Nashik','Chennai'];
  memberShips = [
                 {value:'G',display:'Gold'},
                 {value:'S',display:'Silver'},
                 {value:'P',display:'Platinum'}
  ];
 
  feedbacks = [
    {value:'4',display:'Excellent'},
    {value:'3',display:'Very Good'},
    {value:'2',display:'Good'},
    {value:'1',display:'Poor'}
];

  social =[
             {value:'T',display:'Twitter'},
             {value:'F',display:'Facebook'},
             {value:'B',display:'Blog'}
  ];
 
 
  socialStatus = ['T', 'B'];


  model=new Customer('Ravi',this.locations[0],
                     this.memberShips[1].value,
                     this.feedbacks[2].value,
                     false,this.socialStatus);
   constructor() {  }
 
 
  onSubmit(form: any): void {
       this.submitted=true;
       console.log('you submitted value:', form);
  }
 
  showCustomer(form:any){
         return form && form.controls['firstName'] && form.controls['firstName'].value;
   }
 
   showFormControls(form:any){
     return form && form.controls['firstName'] && form.controls['firstName'].value;
   }

}
