import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { CounterComponent } from './counter/counter.component';
import { DeleteComponent } from './delete/delete.component';
import { InsertComponent } from './insert/insert.component';
import { UpdateComponent } from './update/update.component';
import {SellingProductsComponent } from './selling-products/selling-products.component'
import { CustomModule } from '../custom/custommodule';
import { ProductInsertComponent } from './product-insert/product-insert.component';



@NgModule ({
    declarations: [
        ProductDetailComponent,
        ProductlistComponent,
        SellingProductsComponent,
        ProductInsertComponent,
        CounterComponent,
        InsertComponent,
        UpdateComponent,
        DeleteComponent
    ],
    exports:[
        ProductDetailComponent,
        ProductlistComponent,
        CounterComponent,
        InsertComponent,
        UpdateComponent,
        DeleteComponent,
        SellingProductsComponent,
        ProductInsertComponent
    ],
    imports:[
        BrowserModule,
        FormsModule,
        CustomModule
    ],
    providers:[

    ]
})

export class CatalgModule {

}

