import{Injectable} from '@angular/core';

@Injectable()
export class ProductService {
    private flowersArray =[
      {
        name:"Rose",
        description:"Valentine Flower",
        price:45,
        likes:400,
        quantity:1000,
        imageUrl:"/assets/images/transflower.jpeg"
      },
      {
        name:"Jasmine",
        description:"Worship Flower",
        price:450,
        likes:100,
        quantity:200,
        imageUrl:"/assets/images/jasmine.jpg"
      },
      {
        name:"Lotus",
        description:"Best Flower",
        price:300,
        likes:500,
        quantity:3000,
        imageUrl:"/assets/images/lotus.jpeg"
        
      }
    ];

    constructor(){
      console.log("constructor is invoked")
    }

    public getProducts():any{
      return this.flowersArray
    }
}


