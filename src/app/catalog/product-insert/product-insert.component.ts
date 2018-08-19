import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product-insert',
  templateUrl: './product-insert.component.html',
  styleUrls: ['./product-insert.component.css']
})
export class ProductInsertComponent implements OnInit {

  private currentflower;

  private model={
    title:"Rose",
    description:"Valentine Flower",
    price:5,
    quantity:500,
    url:"http://flowers.com/best/rose.jpg"
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    this.currentflower=this.model;
  }
}
