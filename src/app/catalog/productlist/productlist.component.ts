import { Component, OnInit } from '@angular/core';
import { ProductService } from '../productservice';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css'],
  providers: [ProductService]
})
export class ProductlistComponent implements OnInit {
  //flowersArray =["Rose", "Lily", "Lotus", "Jasmine", "Rose"]

  flowersArray =[];
  //   {
  //     name:"Rose",
  //     description:"Valentine Flower",
  //     price:45,
  //     likes:400,
  //     quantity:1000,
  //     imageUrl:"/assets/images/transflower.jpeg"
  //   },
  //   {
  //     name:"Jasmine",
  //     description:"Worship Flower",
  //     price:450,
  //     likes:100,
  //     quantity:200,
  //     imageUrl:"/assets/images/jasmine.jpg"
  //   },
  //   {
  //     name:"Lotus",
  //     description:"Best Flower",
  //     price:300,
  //     likes:500,
  //     quantity:3000,
  //     imageUrl:"/assets/images/lotus.jpeg"
      
  //   }
  // ]

  constructor(private svc:ProductService) { }

  ngOnInit() {

    this.flowersArray = this.svc.getProducts();
  }

}
