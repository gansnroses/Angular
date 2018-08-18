import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input() name:string;
  @Input() price:number;
  @Input() quantity:number;
  @Input() imageUrl:string;
  @Input() likes:number;

  constructor() { }

  ngOnInit() {
  }

  order(){
    console.log("Your order has been submitted")
  }
  //Event handler in parent
  counterUpdate(ee:any){
    this.likes = ee.count;
  }
}
