import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conditional',
  templateUrl: './conditional.component.html',
  styleUrls: ['./conditional.component.css']
})
export class ConditionalComponent implements OnInit {

  //public : number;
  public billingPrice;
  public productionCost:number;
  public flower:string;
  public bestFlower:string;

  constructor() { 
    this.productionCost=665;
    this.billingPrice=1123;
    this.flower='gerbera';
    this.bestFlower='gerbera'

  }

  isFlowerAvailable():boolean { return true;}

  ngOnInit() {


  }

}
