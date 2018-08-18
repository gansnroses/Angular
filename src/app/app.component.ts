import { Component } from '@angular/core';

@Component({
  selector: 'tfl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'transflower';
  firstName:string="Ganesh";
  lastName:string="Thorat";
  likes:number=4000;
  description:string="Front End Developer";
  product:any={
    title:"Angular",
    duration: 4,
    launched:false,
  }
}
