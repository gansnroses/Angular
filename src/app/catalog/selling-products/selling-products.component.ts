import { Component, OnInit } from '@angular/core';

export interface Seller{
  canSell:boolean;
}

export const FLOWERS =  [
    {name: 'Gerbera', canSell: false},  //jSON Object
    {name: 'Carnation',  canSell: false},
    {name: 'Tulip',   canSell: false},
    {name: 'Marigold',   canSell: false},
    {name: 'Lily',   canSell: true},
    {name: 'Jasmine',   canSell: true}
  ];
  

@Component({
  selector: 'selling-products',
  templateUrl: './selling-products.component.html',
  styleUrls: ['./selling-products.component.css']
})
export class SellingProductsComponent implements OnInit {

  flowers: any[] = [];
  constructor() { this.reset(); }
  ngOnInit() {  }
  reset() { this.flowers = FLOWERS.slice(); }
}