import { Pipe, PipeTransform } from "@angular/core";
 
export interface Seller{
  canSell:boolean;
}

@Pipe({ name: 'sellingflowers' })
export class SellingflowersPipe implements PipeTransform {

transform(allfloweres: Seller[]) {
  return allfloweres.filter(flower => flower.canSell);
}

}